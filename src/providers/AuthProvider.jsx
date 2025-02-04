import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import useAxiosCommon from "../hooks/useAxiosCommon";
// import axios from "axios";

export const AuthContext = createContext(null)

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosCommon = useAxiosCommon();
    
    const createUser = (email, password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }


    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
        
    }


    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }


    const updateUserProfile = (name, photo) =>{
         return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo,
          });
    }


    // Save user

    // const saveUser = async user =>{

    //     const currentUser = {
    //         email : user?.email,
    //         role: 'worker',
    //         status : 'verified',
    //     }
    //     const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/user`, currentUser);
    //     console.log(data);
    //     return data;
    // }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            if(currentUser){
                console.log('current user', currentUser);
              
                // get token
                const userInfo = { email : currentUser.email};
                
                axiosCommon.post('/jwt', userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            }
            
            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
           user,
           loading,
           setLoading,
           createUser,
           signIn,
           signInWithGoogle,
           logOut,
           updateUserProfile,
           
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;