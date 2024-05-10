import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../../firebase/firebase.config'

export const AuthContext = createContext()
const ContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)


    // create user with email and password
    const signUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // log in user with email and password
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log in user with google
    const signInWithGoogle = () => {
        setLoading(true)
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }


    // sign out user 
    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

// user profile updated
const updateUserProfile = (name,photo)=>{
    setLoading(true)
    return updateUserProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
}

    // user authentication state observer
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            setUser(currentUser)
        })
        return () => unsubscribed()
    },[])
    console.log(user);



    const authInfoData = { loading, signUpUser, signInUser, signInWithGoogle, logOutUser,user,setUser,updateUserProfile }
    return (
        <AuthContext.Provider value={authInfoData}>
            {children}
        </AuthContext.Provider>
    );
};

ContextProvider.propTypes = {
    children: PropTypes.node
};

export default ContextProvider;


