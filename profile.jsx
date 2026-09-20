import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { carcontext } from "./cretcontext.jsx"
import { FaUser, FaHeart, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa'
import "./profile.css"

function Profile() {
  const { user, logout, cart, wishlist } = useContext(carcontext)

  const handleLogout = () => {
    logout()
  }

  if (!user) {
    return (
      <div className="profile-page">
        <div className="profile-login-prompt">
          <h2>Please Login</h2>
          <p>You need to login to view your profile</p>
          <Link to="/login" className="login-btn">Login</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-sidebar">
          <div className="profile-avatar">
            <FaUser />
          </div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <button className="logout-btn" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        </div>

        <div className="profile-content">
          <div className="profile-stats">
            <div className="stat-card">
              <FaShoppingCart />
              <h4>{cart.length}</h4>
              <p>Cart Items</p>
            </div>
            <div className="stat-card">
              <FaHeart />
              <h4>{wishlist.length}</h4>
              <p>Wishlist Items</p>
            </div>
          </div>

          <div className="profile-info">
            <h3>Account Information</h3>
            <div className="info-item">
              <span>Name:</span>
              <span>{user.name}</span>
            </div>
            <div className="info-item">
              <span>Email:</span>
              <span>{user.email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile


