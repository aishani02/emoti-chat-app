import { useState, useEffect, useRef } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React from 'react'
import { useContext } from 'react'
import GlobalContext from './GlobalContext'
const useAuthstatus = () => {
  const { fetchData } = useContext(GlobalContext)
  const [loggedIn, setLoggedIn] = useState(false)
  const [checkStatus, setCheckStatus] = useState(true)
  const isMounted = useRef(true)
  useEffect(() => {
    if (isMounted.current) {
      const auth = getAuth()

      onAuthStateChanged(auth, async (user) => {
        if (user) {
          await fetchData(user.displayName, user.photoURL)

          setLoggedIn(true)
        }

        setCheckStatus(false)
      })
    }

    return () => {
      isMounted.current = false
    }
  }, [isMounted])

  return { loggedIn, checkStatus }
}

export default useAuthstatus
