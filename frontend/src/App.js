import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./accounts/Layout";
import Home from "./accounts/Home";
import Contact from "./accounts/Contact";
import Loginreg from "./accounts/Loginreg";
import SendPasswordResetEmail from "./accounts/SendPasswordResetEmail";
import ResetPasswod from "./accounts/ResetPasswod";
import Dashboard from "./accounts/Dashboard";
import Tnc from "./accounts/Tnc";
import PrivateRoute from "./accounts/PrivateRoute";
import { AuthProvider } from "./accounts/AuthContext";
import ChangePassword from "./accounts/ChangePassword";

function App() {
  return (
   <>
   <BrowserRouter>
   <AuthProvider>
   
   <Routes>
    
     <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="contact" element={<PrivateRoute><Contact/></PrivateRoute>}/>
        <Route path="changepassword" element={<PrivateRoute><ChangePassword/></PrivateRoute>}/>
        
        <Route path="loginreg" element={<Loginreg/>}/>
        <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail/>}/>
        <Route path="resetpassword" element={<ResetPasswod/>}/>
        <Route path="tnc" element={<Tnc/>}/>
     </Route>
     <Route path="abc" element={<Contact/>}/>
     <Route path="/dashboard" element={<Dashboard/>}>
     <Route index element={<Home/>}/>
     <Route path="contact" element={<Contact/>}/>
      </Route>
     <Route path="*" element={<h1>Error 404 Page not found</h1>}/>
     

   </Routes>
   
   </AuthProvider>
   </BrowserRouter>
   </>
  );
}

export default App;
