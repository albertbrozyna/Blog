import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {API_BASE_URL} from "./config";


function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")


    const handleLogin = () => {
        navigate("/");
    }

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage("Passwords do not match.");
            return;
        }
        
        const userData = {
            firstName: name,
            lastName: lastName,
            email: email,
            password: password,
        };

        try {
            
            const response = await axios.post(`${API_BASE_URL}/register`, userData);

            if (response.status === 200) {
                setMessage("Registered successfully.");
                setTimeout(() => {
                    navigate("/");
                }, 2000)  
            }
        } catch (error) {
            setMessage("Error: " + (error.response ? error.response.data : error.message));
        }
    };


    return (

        <div style={{ maxWidth: "400px", margin: "auto", paddingTop: "50px" }}>
            <h1 style={{textAlign:"center"}}>Register</h1>

            <form onSubmit={handleRegister}>

                <div style={{ marginTop: "10px",display:"flex",flexDirection:"column",justifyContent:"center" }}> 
                                   
                    <label>First Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required label />
                </div>

                <div style={{ marginTop: "10px",display:"flex",flexDirection:"column",justifyContent:"center" }}> 
                    <label>Last Name</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required></input>
                </div>

                <div style={{ marginTop: "10px",display:"flex",flexDirection:"column",justifyContent:"center" }}> 
                    <label style={{padding:"0px",margin:"0px"}}>email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                </div>

                <div style={{ marginTop: "10px",display:"flex",flexDirection:"column",justifyContent:"center" }}> 
                    <label>Password</label>

                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <div style={{ marginTop: "10px",display:"flex",flexDirection:"column",justifyContent:"center" }}> 
                    <label>confirm password</label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </div>

                <div style={{ marginTop: "10px",display:"flex",flexDirection:"column",justifyContent:"center" }}> 
                    <button type="submit">Create account</button>
                </div>
            </form>

            <div style={{ marginTop: "10px",display:"flex",justifyContent:"center" }}>
                <button onClick={handleLogin} style={{
                    background: "None", color: "red", fontSize: "14px", fontFamily: "sans-serif", border: "None",
                    cursor: "pointer"
                }}>
                    Login
                </button>
            </div>

            <p style={{display:"flex",justifyContent:"center",color:"red"}}>{message}</p>

        </div>
    )
}


export default Register