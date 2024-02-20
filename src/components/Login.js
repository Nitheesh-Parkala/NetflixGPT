import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div>
            <Header />
            <div className="relative">
                <img
                    className="hidden md:block w-full"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="Background"
                />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <form className=" w-11/12 md:w-3/12  p-4 md:p-12 bg-black my-12 md:my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                    <h1 className="font-bold text-3xl py-4">
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </h1>
                    {!isSignInForm && (
                        <input
                            type="Name"
                            placeholder="Full Name"
                            className="p-4 my-2 bg-gray-700 w-full"
                        />
                    )}
                    <input
                        type="text"
                        placeholder="Email"
                        className="p-4 my-2 bg-gray-700 w-full"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="p-4 my-2 bg-gray-700 w-full"
                    />
                    <button className="p-4 my-6 bg-red-600 w-full rounded-lg">
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </button>
                    <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                        {isSignInForm
                            ? "New to Netflix? Sign up now."
                            : "Already registered? Sign in now"}
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;