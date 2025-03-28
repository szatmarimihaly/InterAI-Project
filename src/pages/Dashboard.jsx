import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import DashboardNav from "../components/DashboardNav";
import LoadingSpinner from "../components/LoadingSpinner";

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);

                setTimeout(() => {
                    setLoading(false);
                }, 4000); 
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
        <div className="min-h-screen flex flex-col lg:flex-row md:flex-row text-white">
            <DashboardNav onClick={handleLogout} username={username} />
        </div>
    );
};

export default Dashboard;
