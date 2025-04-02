import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
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
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl text-white font-bold mb-6">{text}</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <label>Email:</label>
                    <input 
                        type="email" 
                        placeholder="example@gmail.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border-2 rounded-lg focus:outline-none" />
                    <label>Password:</label>
                    <div className="flex items-center border-2 rounded-lg">
                        <input 
                            type={isVisible ? "text" : "password"}
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 rounded-lg focus:outline-none" />
                        <button 
                            type="button" 
                            onClick={toggleVisibility}
                            className="text-white p-2 ">
                                {isVisible ? <i className="ri-eye-off-fill"></i> : <i className="ri-eye-fill"></i>}
                        </button>
                    </div>
                    {error && <p className="text-red-500 mt-4 mb-4 text-sm text-center">{error}</p>}
                    <button 
                        type="submit"
                        className="text-white bg-gray-800 transition duration-300 ease-in-out hover:bg-gray-600 w-full rounded-lg h-10">
                        {text}
                    </button>
                </form>

                <Divider />

                <div className="flex gap-2 mt-4 items-center justify-center"> 
                    <p>{alreadyOrNot}</p>
                    <button className="bold" onClick={onClick}>{RouteToButton}</button>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
