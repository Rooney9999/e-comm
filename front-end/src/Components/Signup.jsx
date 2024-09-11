import { useEffect } from "react";
import { useState } from "react";
import{useNavigate} from 'react-router-dom';

const Signup = () => {
    
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate= useNavigate();
    useEffect(()=>{
        const auth =localStorage.getItem('user');
        if(auth){
            navigate('/')

        }
       
    },[]);



    const collectData= async()=>{
        console.log(name,email,password)
        let result =await fetch('http://localhost:5000/register',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                'content-type':'application/json'
            },
        
    });
    result=await result.json()
    console.log(result)
    localStorage.setItem('user',JSON.stringify(result));
    if (result){
        navigate('/')

    }
   


}

    return (
        <div className="form">
            <h1>Register</h1>
            <input 
                className="input-field" 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter Your Name" 
            />
            <input 
                className="input-field" 
                type="email"  
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter Your Email" 
            />
            <input 
                className="input-field" 
                type="password"  
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter Your Password" 
            />
            <button type="button"  onClick={collectData}> Sign Up</button>
        </div>
    );
}

export default Signup;
