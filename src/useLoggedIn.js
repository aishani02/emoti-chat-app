import { useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase.config'

const useLoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedIn(true)
    }
  })

  return { loggedIn }
}

export default useLoggedIn
