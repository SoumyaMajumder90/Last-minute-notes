import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Logout = () => {
  const { logoutUser } = useAuth(); // Fix the typo here
  useEffect(() => {
    logoutUser();
  }, [logoutUser]);

  return <Navigate to="/login" />;
};



//when someone clicks in logout button, it will come here and since it is useeffect it will run for first time