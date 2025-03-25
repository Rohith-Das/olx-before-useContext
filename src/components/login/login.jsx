
import React, { useState } from "react";
import './login.css';

import { login,signup } from "../../firebase";

const Login = ({ onClose }) => {

    const [signState, setSignState] = useState("Sign In");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[name,setName]=useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        onClose(); 
    };

    const userAuth=async(event)=>{
        event.preventDefault()

        if(signState==="Sing In"){
            await login(email,password)
        }else{
            await signup(name,email,password)
        }
    }


    return (
        <div className="loginParentDiv">
            <img src="" alt=" " />
            <h2>{signState}</h2>

            <form onSubmit={handleSubmit}>
                
                <br />
                {signState ==="Sign Up" ? ( 
            <input   className="input" type="text" value={name} onChange={(e)=>setName(e.target.value)}  placeholder="Your name" /> 
                ):(
                    <></>
                )   
            }
                <input
                    type="email"
                    className="input"
                    id="fname"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    className="input"
                    id="password"
                    placeholder="Password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <br />
                <br />
                <button onClick={userAuth} type="submit">{signState}</button>

            </form>

            <div className="form-switch">
                {signState === "Sign In" ? (
                    <p>
                        New to Olx? <span onClick={() => setSignState("Sign Up")}>Sign Up</span>
                    </p>
                ) : (
                    <p>
                        Already have an account? <span onClick={() => setSignState("Sign In")}>Sign In</span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default Login;