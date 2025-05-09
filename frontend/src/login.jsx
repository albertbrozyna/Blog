import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "./config";
import axios from "axios";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${API_BASE_URL}/login`, {
                email: email,
                password: password,
            });

            if (response) {
                localStorage.setItem("user", JSON.stringify(response.data));
                setMessage("User logged succesfully.")
                setTimeout(() => {
                    navigate("/blog");
                }, 2000)
            } else {
                setMessage("Email or password is incorrect.")
            }
        } catch (error) {
            if (error.response) {
                setMessage("Email or password is incorrect.");
            } else {
                setMessage("Something went wrong.");
            }
        }
    };

    const handleRegister = () => {
        navigate("/register")
    }


    return (

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ paddingTop: "50px" }}>
                <h1 style={{ textAlign: "center" }}>Logowanie</h1><br />


                <form onSubmit={handleSubmit}>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <label>Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>

                    <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <button type="submit">
                            Login
                        </button>
                    </div>


                </form >

                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                    <p style={{color: "blue" }}>{message}</p>
                </div>


                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>


                    <button onClick={handleRegister} style={{
                        background: "None", color: "red", fontSize: "14px", fontFamily: "sans-serif", border: "None",
                        cursor: "pointer"
                    }}>
                        Create account
                    </button>
                </div>


            </div>
        </div>
    )



}
export default Login