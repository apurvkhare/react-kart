import React, { useContext, createContext, useState, useEffect } from 'react';
import { auth, provider } from '../firebase/firebase';
import {
  CUSTOMER_CLEAR_DATA,
  CUSTOMER_SET_NAME_AND_ID,
} from '../reducers/ActionTypes';
import { useCustomer } from './CustomerContext';

const AuthContext = createContext();

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const { dispatch } = useCustomer();

  const signIn = async () => {
    await auth.signInWithPopup(provider);
  };

  const signOut = async () => {
    await auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("Google user response data: ", user)
      setCurrentUser(user);
      if (user !== null) {
        dispatch({
          type: CUSTOMER_SET_NAME_AND_ID,
          payload: {
            customerId: user.uid,
            customerName: user.displayName,
          },
        });
      } else {
        dispatch({
          type: CUSTOMER_CLEAR_DATA,
        });
      }
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { useAuth, AuthProvider };
