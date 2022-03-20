import initializeAuthentication from "../authentication/firebase.init";

import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendEmailVerification, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

initializeAuthentication();

const googleProvider = new GoogleAuthProvider()
const auth = getAuth()

const useFirebase = () => {
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [success, setSuccess] = useState(false)
    const [user, setUser] = useState({})


    const singInUsingGoogle = (location, navigate) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                setSuccess(true)
                navigate(location.state?.from || '/')
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(setIsLoading(false))
    }





    //create user by email & password


    //sing out user
    const singOutUser = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(setIsLoading(false))
    }

    return {
        singInUsingGoogle,
        singOutUser,
        // createUser,
        user,
        error,
        success,
        isLoading

    }
}

export default useFirebase;