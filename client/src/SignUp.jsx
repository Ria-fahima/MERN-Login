import React, { useState } from 'react'
import background from './assets/background.jpg'
import { Link } from 'react-router-dom'
import './App.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(result => {console.log(result)
        navigate('/login')
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
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='name'>
                        <strong>Name</strong>
                    </label>
                    <input
                        type="text"
                        placeholder='Enter Name'
                        autoComplete='off'
                        name="name"
                        className='form-control rounded-0'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

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
                    <span>Register</span>
                </button>
            </form>
                <p>Already have an account?</p>
                <Link to="/login" className='btn btn-primary border w-100 rounded-0 text-decoration-none'
                style={{backgroundColor: "#87266E"}}>
                    Login
                </Link>
        </div>
    </div>
  )
}

export default SignUp