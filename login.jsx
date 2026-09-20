import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa'
import { carcontext } from "./cretcontext.jsx"
import toast from 'react-hot-toast'
import "./login.css"

function Login() {
  const { login } = useContext(carcontext)
  const navigate = useNavigate()
  
  const [isRegister, setIsRegister] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.email || !formData.password) {
      toast.error('Please fill in all fields')
      return
    }

    if (isRegister && !formData.name) {
      toast.error('Please enter your name')
      return
    }

    // Simulate login/register
    const user = {
      name: isRegister ? formData.name : formData.email.split('@')[0],
      email: formData.email
    }
    
    login(user)
    toast.success(isRegister ? 'Account created successfully!' : 'Login successful!')
    navigate('/')
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-box">
          <h2>{isRegister ? 'Create Account' : 'Welcome Back'}</h2>
          <p>{isRegister ? 'Sign up to get started' : 'Sign in to continue'}</p>

          <form onSubmit={handleSubmit}>
            {isRegister && (
              <div className="input-group">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            )}

            <div className="input-group">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <FaLock className="input-icon" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {!isRegister && (
              <div className="forgot-password">
                <Link to="/">Forgot Password?</Link>
              </div>
            )}

            <button type="submit" className="login-btn">
              {isRegister ? 'Sign Up' : 'Sign In'}
            </button>
          </form>

          <div className="switch-mode">
            {isRegister ? (
              <p>Already have an account? <span onClick={() => setIsRegister(false)}>Sign In</span></p>
            ) : (
              <p>Don't have an account? <span onClick={() => setIsRegister(true)}>Sign Up</span></p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

