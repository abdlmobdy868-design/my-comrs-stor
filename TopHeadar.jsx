import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { BsCart4 } from "react-icons/bs";
import { carcontext } from '../context/cretcontext.jsx'
import './hedar.css'

function TopHeadar() {
  const { cart, wishlist } = useContext(carcontext)
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`)
    }
  }

  return (
    <div className='top-headar'>
      <div className='container'>
        <Link className='logo' to="/" >
          <span className="logo_icon">▶</span>
          <span className="logo_text">zon</span>
        </Link>

        <form action="" className="sarch_box" onSubmit={handleSearch}>
            <input 
              type="text" 
              name='search' 
              placeholder='Search...' 
              id='search' 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type='submit'><FaSearch /></button>
        </form>

        <div className="headar_icons">
            <div className="icon">
              <Link to="/wishlist">
                <CiHeart />
                <span className='count'>{wishlist.length}</span>
              </Link>
            </div>

             <div className="icon">
              <Link to="/cart">
                <BsCart4 />
                <span className='count'>{cart.length}</span>
              </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeadar

