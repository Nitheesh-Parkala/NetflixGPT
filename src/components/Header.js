import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";
import { addUser,removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import {changeLanguage} from "../utils/configSlice"
const Header = () => {
   const showGptSearch = useSelector((store)=> store.gpt.showGptSearch)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(store=>store.user)
    const handleSignOut = ()=>{
    signOut(auth).then(() => {
    // Sign-out successful.
    }).catch((error) => {
    // An error happened.
      navigate("/error")
   });
    }
    useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    const {uid,email,displayName,photoURL} = user
    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
     navigate("/browse")
  } else {
    // User is signed out
    dispatch(removeUser());
      navigate("/")
  }
});
//  unsubscribe when the component unmounts
return()=> unsubscribe();
 },[]) 

 const handleGptSearchClick =()=>{
      // Toggle Gpt Search
      dispatch( toggleGptSearchView())

 }
 const handleLanguageChange =(e)=>{
     dispatch(changeLanguage(e.target.value))
 }
    return (
        <div className="absolute w-screen px-3 md:px-8 py-2 bg-gradient-to-b from-black z-10 flex  md:justify-between  flex-col md:flex-row">
            <img className="w-44  mx-auto  md:mx-0 md:w-44" src={LOGO} alt="logo" />
           {user && <div className="flex items-center justify-between">
        { showGptSearch && <select className="py-3 m-2 rounded-lg px-2 bg-gray-900 text-white text-lg font-bold"
           onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang)=>(
               <option key={lang.identifier} value={lang.identifier} >
                {lang.name} 
                </option>
               ))}
           </select>}
            <button onClick={handleGptSearchClick} 
             className="bg-purple-700 font-bold  hover:bg-purple-500 m-1 text-white rounded-lg p-3 my-6">
               {!showGptSearch ? "GPT Search" : "Home Page"} 
              </button>
                <img className="hidden md:block w-10 md:w-12 h-12 m-3  rounded-full " alt="usericon" src={user?.photoURL}/>
                <button onClick={handleSignOut} className="p-3 my-6 bg-red-600 hover:bg-red-500 m-2 rounded-lg font-bold text-white">
                    SignOut
                </button>
            </div>}
        </div>
    );
};
export default Header;
