import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize navigate

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    }, [navigate]);

    const handleLogin = async () => {
        console.log(email, password);
        let result = await fetch('http://localhost:5000/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        });

        let data = await result.json();
        console.log(data);

        // Handle the case where the user is not found or login fails
        if (data.email) {
            localStorage.setItem('user', JSON.stringify(data));
            navigate('/');
        } else if (data.result === "User not found" || data.result === "Email or password missing") {
            alert("Please enter the correct details");
        } else {
            alert("Login failed. Please try again.");
        }
    };

    return (
        <div> 
            <input 
                type="text" 
                placeholder="Enter the email" 
                onChange={(e) => setEmail(e.target.value)} 
                value={email} 
            />
            <input 
                type="password" 
                placeholder="Enter the password" 
                onChange={(e) => setPassword(e.target.value)}  
                value={password} 
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
