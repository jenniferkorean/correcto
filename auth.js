import React, { useState, useEffect, createContext, useContext } from 'react'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { API } from '../config';


const AuthContext = createContext();

const AuthProvider = ({ chiledren }) => {
    const [ state, setState ] = useState({
       user: null,
       token: "",
    });

    //config axios
    axios.defaults.baseURL = API

    useEffect(() => {
        const loadFromAsyncStorage = async () => {
          let data = await AsyncStorage.getItem("@auth");
          const as = JSON.parse(data);
          setState({ ...state, user: as.user, token: as.token });
        };
        loadFromAsyncStorage();
      }, []);

  return (
      <AuthContext.Provider value={{state, setState}}>
         {chiledren}
      </AuthContext.Provider>
  );
};


export  { AuthContext, AuthProvider };