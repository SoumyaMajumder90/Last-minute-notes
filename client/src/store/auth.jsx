import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext(); //context

//provider
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState("");
  const authorizationToken = `Bearer ${token}`;

  const storetokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem('token', serverToken);  //reusuable function
  };

  let isLoggedIn = !!token;

  //tackling the logout functionality
  const logoutUser = () => {
    setToken("");
    return localStorage.removeItem('token');
  };

  //jwt authentication- to get the currently login user data.
  const userAuthentication = async () => {
    try {
      const response = await fetch("https://last-minute-notes-2.onrender.com/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("user data ", data.userData)
        setUser(data.userData);
      }
    } catch (error) {
      console.log("error fetching user data", error);
    }
  };

  useEffect(() => {
    userAuthentication();
  }, [token]);  // Include token as a dependency to run the effect whenever the token changes

  return (
    <AuthContext.Provider value={{ isLoggedIn, storetokenInLS, logoutUser, user, authorizationToken }}>
      {children}
    </AuthContext.Provider>
  );
};

//consumer

//creating custom hook
//useAuth ifunction now contains the value provideed by the Authcontext.provider higher up in the componene tree
export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAUth used outside of provider"); //if we forget about wrapping index.jsx wiht useauth then this happens
  }

  return authContextValue; //iske andar sabkuch hai bas hath dalna baki hai
};

//value = storetoken- anyone in anypage can access this
//useAuth is a context APi
export default AuthProvider;
