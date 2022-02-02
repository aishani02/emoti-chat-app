import { createContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import {
  doc,
  orderBy,
  serverTimestamp,
  setDoc,
  addDoc,
  getDoc,
} from 'firebase/firestore'
import {
  collectionGroup,
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore'

import { db } from './firebase.config'
import { auth } from './firebase.config'
import useLoggedIn from './useLoggedIn'

const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
  //  Initialization

  const [signInData, setSignInData] = useState(null)
  const [users, setUsers] = useState(null)
  const [messages, setMessages] = useState([])
  const [darkMode, setDarkMode] = useState(false)
  const [mainStyle, setMainStyle] = useState('text-white')
  const location = useLocation()
  const navigate = useNavigate()

  //Handle Dark Mode

  const handleDarkMode = (e) => {
    console.log(e.target.data)
  }

  //fetch Data
  async function fetchData(displayName, photoURL) {
    const auth = getAuth()
    setSignInData({ displayName, photoURL })
    const users = []
    const ref = query(collectionGroup(db, 'users'))
    const querySnapshot = await getDocs(ref)
    querySnapshot.forEach((doc) => {
      doc.id !== auth.currentUser.uid &&
        users.push({
          uid: doc.id,
          name: doc.data().name,
          image: doc.data().image,
        })
    })
    setUsers(users)
  }

  // On SignIn Button Click

  const onSignIn = async () => {
    try {
      const auth = getAuth()

      const {
        user: { displayName, photoURL, uid },
      } = await setPersistence(auth, browserLocalPersistence).then(async () => {
        const provider = new GoogleAuthProvider()

        const user = await signInWithPopup(auth, provider)

        return user
      })

      await setDoc(doc(db, 'users', uid), {
        name: displayName,
        image: photoURL,
        uid: uid,
      })

      setSignInData({ displayName, photoURL })
      const users = []
      const ref = query(collectionGroup(db, 'users'))
      const querySnapshot = await getDocs(ref)
      querySnapshot.forEach((doc) => {
        doc.id !== auth.currentUser.uid &&
          users.push({
            uid: doc.id,
            name: doc.data().name,
            image: doc.data().image,
          })
      })
      setUsers(users)

      navigate('/home')
    } catch (error) {
      toast.error('Wrong Credentials')
    }
  }

  // Fetch Messages
  const fetchMessages = async (friend_uid) => {
    setMessages([])
    const auth = getAuth()
    const user_uid = auth.currentUser.uid
    const condition1 = user_uid + '_' + friend_uid
    const condition2 = friend_uid + '_' + user_uid
    const queryArray = []
    queryArray.push(condition1)
    queryArray.push(condition2)

    const q = query(
      collection(db, 'messages'),
      where('msg_btw', 'in', queryArray),
      orderBy('timeStamp', 'asc')
    )

    const querySnapshot = await getDocs(q)
    console.log(querySnapshot)
    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots

        setMessages((prevValue) => {
          return [...prevValue, doc.data()]
        })
      })
    } else {
      setMessages([{ msg_body: 'No Message yet' }])
    }
  }

  //Fetch Single Message

  const fetchSingleMessage = async (docId) => {
    const new_message = await getDoc(doc(db, 'messages', docId))

    setMessages((prevMessages) => {
      return [...prevMessages, new_message.data()]
    })
  }

  // Push Single Message to the Database

  const pushMessage = async (msg_body, friend_uid) => {
    const auth = getAuth()
    // New Message added to the database
    const docRef = await addDoc(collection(db, 'messages'), {
      msg_body: msg_body,
      msg_owner: auth.currentUser.uid,
      msg_btw: auth.currentUser.uid + '_' + friend_uid,
      timeStamp: serverTimestamp(),
    })

    return docRef.id
  }

  return (
    <GlobalContext.Provider
      value={{
        signInData,
        onSignIn,
        users,
        fetchData,
        fetchMessages,
        fetchSingleMessage,
        messages,
        handleDarkMode,
        pushMessage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
