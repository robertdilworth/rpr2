import React, { useEffect, useState } from 'react';
import { auth } from './firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Login = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle login
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      console.log("User signed out");
    });
  };

  return (
    <div>
      <h2>Login</h2>
      {user ? (
        <button onClick={signOut}>Logout</button>
      ) : (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
    </div>
  );
};

export default Login;
