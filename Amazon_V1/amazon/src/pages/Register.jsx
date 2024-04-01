import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../styles//Register.css';
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

      
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

       
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
            newErrors.email = 'Valid email is required';
        }

     
        if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

  
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if there are no errors
    };

    const register = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Add logic to register the user
            createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                  user.displayName = formData.name
                  console.log('User registered successfully:', user);
                  navigate('/');
                }
              })
              .catch((error) => {
                console.error('Registration error:', error);
                alert(error.message);
              });
        } else {
            console.log('Form validation failed');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

  
        setErrors({
            ...errors,
            [name]: undefined,
        });
    };


    return (
        <div className='register'>
            <Link to='/'>
                <img className='register_login_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="register_container">
                <h1>Create Account</h1>
                <form onSubmit={register}>
                    <h6>Your Name</h6>
                    <input
                        type="text"
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                    <h6>Email</h6>
                    <input
                        type="email"
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                    <h6>Password</h6>
                    <input
                        type="password"
                        name="password"
                        placeholder='At least 6 characters'
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                    <h6>Re-enter Password</h6>
                    <input
                        type="password"
                        name="confirmPassword" 
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                    <button className='register_button' type="submit">Create your Amazon Account</button>
                </form>
                <p>By creating an account you agree to Amazon's <span>Condition of Use </span>and <span>Privacy Notice</span>. </p>
            </div>
        </div>
    )
}

export default Register
