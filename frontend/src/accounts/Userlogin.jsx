import React, { useContext,useState } from "react";
import { TextField,Button, Box,Alert } from "@mui/material"
import  {NavLink}  from "react-router-dom";
import AuthContext from "./AuthContext";



const Userlogin = () => {
    let {loginUser}=useContext(AuthContext)

    const [error,setError] = useState({
        user:null,
        status:false,
        msg:"",
        type:""
    });

    const handelChange = e =>{
        setError({...error,[e.target.name]:e.target.value});
        

    };
  

    const handleSubmit=(e)=>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData={
        email:data.get('email'),
        password:data.get('password'),
    }

    if(actualData.email && actualData.password){
        if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(actualData.email)))
        {
            setError({status:true, msg:"Email address is not valid.", type:'error'})
        }
        else{
            loginUser(e);
            console.log(actualData)

            

           
        }
    }else{
        setError({status:true, msg:"All Fields are Required.", type:'error'})

    }

}

  return (
<>
<Box component='form'  onChange={handelChange} noValidate sx={{mt:1}} id="login-form" onSubmit={handleSubmit}>
<TextField margin="normal" required fullWidth id='email' name='email' label='Email Address'/>
<TextField margin="normal" required fullWidth id='password' name='password' label='Password' type='password'/>
<NavLink to='/sendpasswordresetemail'>Forgot Password?</NavLink>
<Box textAlign='center'>
<Button type='submit' variant='contained' sx={{mt:3, mb:2, px:5}}>Login</Button>

</Box>

 {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''} 
</Box>
</>
  )
}

export default Userlogin