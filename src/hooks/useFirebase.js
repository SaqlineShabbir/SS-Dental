import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged ,signOut , createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication()
const useFirebase = () =>{
    const [user, setUser] = useState({})
    const [error, setError] = useState("")
    const [isLoading,setIsLoading] = useState(true)
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


const signInUsingGoogle = () =>{
  return  signInWithPopup(auth, googleProvider);
    
}

const logOut = () =>{
    setIsLoading(true);
    signOut(auth)
    .then(() =>{
    
    })
    .finally(() =>setIsLoading(false))
    setUser({})
    
}

const handleRegister =(e)=>{
    e.preventDefault();
    if(password.length <6){
        setError('Password must be at least 6 carracter long')
        return;
    }
     console.log(email,password)
     createUserWithEmailAndPassword(auth, email, password)
     .then(result =>{
        setUserName();
         setError('')
         
     })
     
     .catch(error =>{
         setError(error.message)
     })
    
 }


 const handleLogIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then(result =>{
        setUser(result.user)
        console.log(result.user)
        setError('')
        

    })

    
    .catch(error =>{
        setError(error.message)
    })
    
 }


const handleEmailChange = (e) => {
    setEmail(e.target.value)
}
const handlePasswordChange = (e) => {
    setPassword(e.target.value)
}
const handleNameChange = (e) =>{
    setName(e.target.value)
}

const setUserName =() =>{
    updateProfile(auth.currentUser, {
        displayName: name,photoURL: "https://example.com/jane-q-user/profile.jpg"
      })
  .then(result =>{ })
  
}

  useEffect(()=>{
  onAuthStateChanged(auth,(user) =>{
      if(user){
          setUser(user)
      }
      setIsLoading(false)
  })
  },[])


  return {
      user,
      signInUsingGoogle,
      logOut,
      handleRegister,
      handleEmailChange,
      handlePasswordChange,
      handleLogIn,
      error,
      handleNameChange,
      setIsLoading,
      isLoading

  }
}




export default useFirebase;