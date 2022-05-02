import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { AuthContext, AuthProvider } from './context/auth';
import ScreenNav from './navigation/ScreenNav';

function App  ()  {

  return ( 
  
  <NavigationContainer>  
    <AuthContext.Provider value={{state: 'state', setState:'data'}}>
       <ScreenNav />  
    </AuthContext.Provider>
  </NavigationContainer>
  

 
  )
  
};

export default App;