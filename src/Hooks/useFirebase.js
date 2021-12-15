
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword,updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";
import Initialization from "../Firebase/firebase.init";


Initialization();
    const useFirebase = () => {
        const [user, setUser] = useState({});
        const [loading, setLoading] = useState(true);
        const [admin, setAdmin]=useState(false);
    
    
        const auth = getAuth();
    
        /// create register app
        const RegisterUser = (email, password, name,navigate) => {
            setLoading(true)
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser={email, displayName:name};
                setUser(newUser);
                // saveUser(email, name)
                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                    // Profile updated!
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });
                  
                navigate('/')
              
    
     })
        .catch((error) => {
         console.log(error.message);
             // ..
         })
         .finally(()=> setLoading(false));
        }
    
        /// login user
        const loginUser = (email, password,location, navigate) => {
            setLoading(true)
            signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    const destination= location?.state?.from || '/';
                navigate(destination);
                // console.log('history', history,location);
                })
                .catch((error) => {
                console.log(error.message);
                }).finally(()=>setLoading(false));
               
        }
    
        ///on state change
    
        useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user)
                } else {
                    setUser({})
                }
                setLoading(false)
            });
            return () => unSubscribe;
    
        }, [])
    
          ///sign out
          const logOut=()=>{
            signOut(auth).then(() => {
            //  setUser({})
               }).catch((error) => {
    
              })
              .finally(()=> setLoading(false));
    
        }
    
        //post user
        // const saveUser=(email, displayName)=>{
        //     const user={email,displayName}
        // fetch('https://damp-eyrie-28424.herokuapp.com/addUserInfo',{
        //     method: "POST",
        //     headers:{ 'content-type' : 'application/json'},
        //     body:JSON.stringify(user)
        // })
        // .then(res=>res.json())
        // .then(data=> console.log(data))
        // }
      
        // //get admin
        // useEffect(()=>{
        //     fetch(`https://damp-eyrie-28424.herokuapp.com/users/${user?.email}`)
        //     .then(res=>res.json())
        //     .then(data=>setAdmin(data?.admin))
    
        // },[user.email])
    
        return {
            user,
            // admin,
            RegisterUser,
            loading,
            loginUser,
            logOut
    
        }
    }
    export default useFirebase;
   
