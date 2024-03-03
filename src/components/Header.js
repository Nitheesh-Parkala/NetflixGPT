import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";
import { addUser,gptSearch,removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

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
    return (
        <div className="absolute w-screen px-3 md:px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-24 md:w-44" src={LOGO} alt="logo" />
           {user && <div className="md: flex items-center">
            <button onClick={handleGptSearchClick} 
             className="bg-purple-700 font-bold  hover:bg-purple-500  text-white rounded-lg p-3 my-6">
               {!showGptSearch ? "GPT Search" : "Home Page"} 
              </button>
                <img className=" w-10 md:w-12 h-12 m-3  rounded-full " alt="usericon" src={user?.photoURL}/>
                <button onClick={handleSignOut} className="p-3 my-6 bg-red-600 hover:bg-red-500 rounded-lg font-bold text-white">
                    SignOut
                </button>
            </div>}
        </div>
    );
};
export default Header;
