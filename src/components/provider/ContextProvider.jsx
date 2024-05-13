import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import auth from '../../firebase/firebase.config'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext()
const ContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    // create user with email and password
    const signUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // log in user with google
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        setLoading(true)
        return signInWithPopup(auth, provider)
    }


    // log in user with email and password
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    // sign out user 
    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    // user profile updated
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // user authentication state observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail};
            setUser(currentUser)
            setLoading(false)
            if(currentUser){
               
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`,loggedUser,{  withCredentials: true})
                .then(res => {
                    console.log(res.data);
                })
            }else{
                axios.post(`${import.meta.env.VITE_API_URL}/logout`,loggedUser,{
                    withCredentials: true
                }).then(res => {
                    console.log(res.data);
                })
            }
        })
        return () => {
            return unsubscribe()
          }
    }, [user])


    console.log(user);

    const authInfoData = { loading, signUpUser, signInUser, signInWithGoogle, logOutUser, user, setUser, updateUserProfile }
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


