import { createContext, useEffect, useState } from 'react'
import { app } from '../Firebase/firebase.config'
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)

// eslint-disable-next-line react/prop-types
const UserContext = ({ children }) => {
  const [user, setUser] = useState({})
  const [loader, setLoader] = useState(true)

  // register

  const register = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // singIn
  const login = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  // singOut
  const singOut = () => {
    setLoader(false)
    return signOut(auth)
  }

  //set user with state
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, CurrntUser => {
      setUser(CurrntUser)
      setLoader(false)
    })
    return () => unSubscribe()
  }, [])

  const userInfo = { loader, user, register, login, singOut }
  return (
    <div>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </div>
  )
}

export default UserContext
