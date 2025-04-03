import { useState } from "react";
import { auth, googleProvider, githubProvider } from "../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Divider from "./Divider";

const AuthForm = ({ text, alreadyOrNot, RouteToButton, onClick }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const handleGoogleSignIn = async () => {
        try{
            await signInWithRedirect(auth, googleProvider);
            navigate("/welcome");
        }catch (error){
            console.log(error);
            setError("Could not sign in with Google.")
        }
    }

    const handleGithubSignIn = async () => {
        try{
            await signInWithPopup(auth, githubProvider);
            navigate("/welcome");
        }catch (error){
            console.log(error);
            if(error.code === 'auth/account-exists-with-different-credential'){
                setError("An account already exists with the same email address but different sign-in credentials.");
            }else{
                setError("Could not sign in with GitHub");
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            if (text === "Sign Up") {
                await createUserWithEmailAndPassword(auth, email, password);
            } else {
                await signInWithEmailAndPassword(auth, email, password);
            }
            navigate("/welcome");
        } catch (error) {
            console.log(error);
            if (text === "Sign Up" && error.code === "auth/email-already-in-use") {
                setError("Email is already in use.");
            } else if (text === "Sign In" && error.code === "auth/invalid-credential") {
                setError("Invalid email or password.");
            } else {
                setError("An error occurred. Please try again.");
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-auto bg-center" 
             style={{ backgroundImage: "url('/bg.png')" }}>
            <div className="bg-gray-700/50 p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl text-white font-bold mb-6">{text}</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <label>Email:</label>
                    <input 
                        type="email" 
                        placeholder="example@gmail.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 bg-gray-800/40 backdrop-blur-sm 
                                rounded-xl border border-gray-700/50 
                                focus:border-gray-500 focus:bg-gray-700/50
                                transition-all duration-300 
                                text-gray-200 placeholder-gray-500
                                focus:outline-none focus:ring-1 focus:ring-gray-500" 
                    />
                    <label>Password:</label>
                    <div className="flex items-center bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 focus-within:border-gray-500 focus-within:bg-gray-700/50 transition-all duration-300"
                    >
                        <input 
                            type={isVisible ? "text" : "password"}
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2.5 bg-transparent text-gray-200 placeholder-gray-500 focus:outline-none" /
                        >
                        <button 
                            type="button" 
                            onClick={toggleVisibility}
                            className="px-4 text-gray-400 hover:text-gray-200 transition-colors duration-300"
                        >
                                {isVisible ? <i className="ri-eye-off-fill"></i> : <i className="ri-eye-fill"></i>}
                        </button>
                    </div>
                    {error && <p className="text-red-500 mt-4 mb-4 text-sm text-center">{error}</p>}
                    <button 
                        type="submit"
                        className="text-white bg-gray-600/50 transition duration-300 ease-in-out hover:bg-gray-600 w-full rounded-lg h-10">
                        {text}
                    </button>
                </form>

                <Divider />

                <button
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center gap-2 w-full px-5 py-2.5  bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg hover:bg-gray-700/50 transition-all duration-300 text-gray-200 font-medium mb-6"
                >
                    <img src="./google.svg" alt="Google" className="w-5 h-5"/>
                    Sign In With Google
                </button>

                <button
                onClick={handleGithubSignIn}
                className="flex items-center justify-center gap-2 w-full px-5 py-2.5  bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg hover:bg-gray-700/50 transition-all duration-300 text-gray-200 font-medium mb-6"
                >
                    <i className="ri-github-fill text-xl"></i>
                    Continue With GitHub
                </button>

                <div className="flex gap-2 mt-4 items-center justify-center"> 
                    <p>{alreadyOrNot}</p>
                    <button className="bold" onClick={onClick}>{RouteToButton}</button>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
