import React , {useContext , useState} from 'react'
import { UserContext } from '../UserContext/Usercontext'
import Register from './Register'
import './Login.css'


export default function Login() {
const {flag,setFlag ,users,setUsers,user,setUser,setName, username, setUserName} =useContext(UserContext);
const email =useState();
const Password =useState();


const handleLogin=()=>{
    const Email = document.getElementById('text1').value;
    const Password = document.getElementById('text2').value;

    let logged =false;
    users.map((v) => {
        if((v.email === Email)&&(v.password === Password)){
            setUser()
            setName(v.name);
            setFlag(1);
            logged=true;
        }
    })
    if(!logged){
        alert("Invalid Username or Password")
    }
}
  return (
    
    <div>
        {flag === 2 && <Register />}
        <div className='body'>
        <div className="login-container">
        <div><h1>Login</h1></div>
        <input onChange={(e)=>setUser((prev)=>({ ...prev, email: e.target.value }))} type='email' id='text1' className="login-input" placeholder='E-mail'></input><br></br>
        <input onChange={(e)=>setUser((prev)=>({ ...prev, pass: e.target.value }))} type="password" id='text2' className="login-input" placeholder='Password' ></input>
        <br></br>
        <button onClick={handleLogin} className="login-button">Login</button><br></br>
        <button onClick={() => setFlag(2)} className="login-button">Create Account</button><br></br>
        
        </div>
        </div>
    </div>
  )
}
