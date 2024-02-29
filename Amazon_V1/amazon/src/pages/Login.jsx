import React, { useState } from 'react';
import '../styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword} from 'firebase/auth';




function Login() {
    const navigate = useNavigate();
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password).then((auth) => {navigate('/')}).catch(error => alert(error.message))
    }
    // const register = e => {
    //     e.preventDefault();
    //     createUserWithEmailAndPassword(auth,email,password).then((auth) => {navigate('/')}).catch(error => alert(error.message))

    // }
    return (
        <div className="login">
            <Link to='/'>
                <img className='w-[100px] my-5 m-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form action="">
                    <h6>E-mail</h6>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <h6>Password</h6>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login_signin_button'>Sign in</button>
                </form>
                <p>By continuing you agree to the Amazon- Clone's <span>Condition of Use</span> and <span>Privacy Notice</span>.</p>
                <div className="bottom_border">
                    <div ></div>
                    <p>New to Amazon?</p>
                    <div ></div>
                </div>
            <Link to={'/register'} >
                <button className='login_register_button'>Create your Amazon Account</button>
            </Link>
                
            </div>

        </div>
    )
}

export default Login