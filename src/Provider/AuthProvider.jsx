import React, { useState, createContext, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { app } from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create new user with email, password, displayName, and photoURL
  const createNewUser = async (email, password, displayName, photoURL) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential?.user);

      // Store the user in the database
      await axios.post("https://a11server.vercel.app/user", {
        email,
        displayName,
        photoURL,
      });

      toast.success("Account created successfully!");
    } catch (error) {
      console.error(`Error: ${error.message}`);
      toast.error(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Update user profile
  const ProfileUpdate = async (displayName, photoURL) => {
    setLoading(true);
    try {
      await updateProfile(auth.currentUser, { displayName, photoURL });
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error.message);
      toast.error(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Login with Google
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user);

      

      toast.success("Google login successful!");
    } catch (error) {
      console.error(`Error: ${error.message}`);
      toast.error(`Error: ${error.message}`);
    }
  };

  // Login with email and password
  const login = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error("Login error:", error.message);
      toast.error("Please input valid email or password");
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const logout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
      toast.success("Sign-out successful.");
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };



  const authInfo = {
    user,
    setUser,
    createNewUser,
    loginWithGoogle,
    logout,
    loading,
    ProfileUpdate,
    login,
    
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </AuthContext.Provider>
  );
};

export default AuthProvider;
