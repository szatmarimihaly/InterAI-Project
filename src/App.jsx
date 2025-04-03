import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Welcome from "./pages/Welcome";
import TestAi from "./pages/TestAi";
import { auth } from "./firebase";
import LoadingSpinner from "./components/LoadingSpinner";
import Interview from "./pages/Interview";
import InterviewPage from "./pages/InterviewPage";

const RequireAuth = ({ children }) => {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);

    if (user === undefined) return <LoadingSpinner />;
    return user ? children : <Navigate to="/sign-in" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/welcome" element={<RequireAuth><Welcome /></RequireAuth>} />
        <Route path="/interview" element={<RequireAuth><Interview /></RequireAuth>} />
        <Route path="/interviewpage" element={<RequireAuth><InterviewPage /></RequireAuth>} />
        <Route path="/chat" element={<RequireAuth><TestAi /></RequireAuth>} />
      </Routes>
    </Router>
  );
};

export default App;
