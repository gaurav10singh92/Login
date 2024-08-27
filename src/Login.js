import React,{useState} from "react";
import './App.css';
function Login() {
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const [userErr,setUserErr]=useState("false");
    const [passErr,setPassErr]=useState("false");  
    function loginHandle(e)
    {
        if(user.length<3 || password.length<3)
        {
            alert("type correct value")
        }else{
            alert("User succesfully Login");
        }

        e.preventDefault()
    }
    function userHandler(e){
        let item=e.target.value;
        if(item.length<3)
        {
            setUserErr(true)
        }
        else{
            setUserErr(false)
        }
        setUser(item) 
    }
    
    function passwordHandler(e){
        let item=e.target.value;
        if(item.length<3)
        {
            setPassErr(true)
        }
        else{
            setPassErr(false)
        } 
        setPassword(item)
    }
    return (
        <div>
            <h1 class ="header">Login</h1>
            <form onSubmit={loginHandle}>
            <input type="text" placeholder="Enter your user id" onChange={userHandler}/>{userErr?<span>User not valid</span>:""}
            <br></br>
            <input type="password" placeholder="Enter user password"onChange={passwordHandler}/>{passErr?<span>Password not valid</span>:""}
            <br></br>
            <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login;