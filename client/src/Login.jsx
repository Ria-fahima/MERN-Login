import React, { useState } from 'react'
import background from './assets/background.jpg'
import { Link } from 'react-router-dom'
import './App.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email, password})
        .then(result => {
          console.log(result)
          if(result.data === "Success"){
            navigate('/home')
          }
        
        })
        .catch(err => console.error(err))
    }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100' 
        style={{backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat", 
                backgroundPosition: "central",
                backgroundSize: "cover"
    }}>
        <div className='bg-white p-3 rounded main-form'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='email'>
                        <strong>Email</strong>
                    </label>
                    <input
                        type="text"
                        placeholder='Email Address'
                        autoComplete='off'
                        name="email"
                        className='form-control rounded-0'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='mb-3'>
                    <label htmlFor='password'>
                        <strong>Password</strong>
                    </label>
                    <input
                        type="text"
                        placeholder='Enter Password'
                        autoComplete='off'
                        name="password"
                        className='form-control rounded-0'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className='w-100 rounded-0'>
                    <span>Login</span>
                </button>
            </form>
                <p>Don't have an account?</p>
                <Link to="/register" className='btn btn-primary border w-100 rounded-0 text-decoration-none'
                style={{backgroundColor: "#87266E"}}>
                    Sign Up
                </Link>
        </div>
    </div>
  )
}

export default Login