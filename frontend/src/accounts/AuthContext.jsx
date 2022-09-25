import React, {createContext,useState,useEffect } from "react";
import jwt_decode from "jwt-decode";
import {useNavigate } from "react-router-dom";

const AuthContext = createContext();
export default AuthContext;
export const AuthProvider=({children})=>{

    let [authToken, setAuthToken]= useState(()=>localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
    let [user,setUser]= useState(()=>localStorage.getItem('authTokens') ? jwt_decode(JSON.parse(localStorage.getItem('authTokens')).access) : null);

    let [loading, setLoading]= useState(true);    const navigate = useNavigate()
    let loginUser = async(e)=>{
        e.preventDefault()
        console.log("Form submited")
        let response= await fetch('http://127.0.0.1:8000/api/jwt/create/',
        {method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify({'email':e.target.email.value,'password':e.target.password.value})
        
    
    
    })
    let data = await response.json()
    
    if(response.status===200)
    {
        setAuthToken(data)
        setUser(jwt_decode(data.access));
        localStorage.setItem('authTokens',JSON.stringify(data))
        navigate('/')
    }else{
        alert("Something wrong")
    }

    }

    let logoutUser=()=>{
        setAuthToken(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('/')
    }

    let updateToken = async ()=>{
        let response= await fetch('http://127.0.0.1:8000/api/jwt/refresh/',
        {method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify({'refresh':( authToken ? authToken.refresh: null)})
        
    
    
    })
    let data = await response.json()

    if(response.status===200){
        setAuthToken({...authToken, access: data.access})
        setUser(jwt_decode(data.access))
        localStorage.setItem('authTokens', JSON.stringify(authToken))
    }
    else{
        logoutUser()
    }
    if(loading)
    {
        setLoading(false);
    }



    }






    let contextData={user:user,loginUser:loginUser,logoutUser:logoutUser}
    useEffect(()=>{
        if(loading){
            updateToken();
        }
        let interval= setInterval(()=>{if(authToken){updateToken()}},2000)
        return ()=>clearInterval(interval)


    },[authToken,loading]);

    return(
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}