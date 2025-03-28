import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import DashboardNav from "../components/DashboardNav";

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
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

    if (!user) {
        return <div className="text-white text-center mt-10">Loading...</div>;
    }

    const username = user.email.split("@")[0];

    return (
        <div className="min-h-screen flex flex flex-col lg:flex-row md:flex-row text-white">
            <DashboardNav onClick={handleLogout} username={username}/>
        </div>
    );
};

export default Dashboard;
