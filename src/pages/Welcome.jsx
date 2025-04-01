import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import LoadingSpinner from "../components/LoadingSpinner";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const Welcome = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);

                setTimeout(() => {
                    setLoading(false);
                }, 1000); 
            } else {
                navigate("/sign-in");
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/sign-in");
    };

    // Ha a felhasználó nincs bejelentkezve, akkor jelenik meg a spinner
    if (loading) {
        return <LoadingSpinner />;
    }

    const username = user.email.split("@")[0];

    return (
        <div className="flex flex-col items-center mr-4 ml-4">
            <Navbar text="Log Out" onClick={handleLogout}/>
            <HeroSection />
        </div>
    );
};

export default Welcome;
