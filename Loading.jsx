import React from 'react'
import "./Loading.css"

function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-wrapper">
        <div className="loading-spinner">
          <div className="spinner-inner"></div>
        </div>
        <p className="loading-text">Loading...</p>
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default Loading

