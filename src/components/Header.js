import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate()
    const user = useSelector(store=>store.user)
    
    const handleSignOut = ()=>{
    signOut(auth).then(() => {
    // Sign-out successful.
    navigate("/")
    }).catch((error) => {
    // An error happened.
      navigate("/error")
   });
    }
    return (
        <div className="absolute w-screen px-3 md:px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-24 md:w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
           {user && <div className="md: flex items-center">
                <img className=" w-10 md:w-12 h-12 m-3  rounded-full " alt="usericon" src={user?.photoURL}/>
                <button onClick={handleSignOut} className="p-3 my-6 bg-red-600 hover:bg-red-500 rounded-lg font-bold text-white">
                    SignOut
                </button>
            </div>}
        </div>
    );
};
export default Header;
