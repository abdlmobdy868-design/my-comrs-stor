import React, { useEffect, useState, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdOutlineMenu } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiSignInThin } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { carcontext } from '../context/cretcontext.jsx';

const NavLinks =[
  {title:"Home", link:"/"},
  {title:"About", link:"/about"},
  {title:"Accessories", link:"/accessories"},
  {title:"Blog", link:"/blog"},
  {title:"Contact", link:"/contact"},
]

function BtmHeadar() {

  const location = useLocation()
  const { user, logout } = useContext(carcontext)

  const [catagry, setcatagry] = useState([]);
  const [isopen, setIsopen] = useState(false)

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((data) => setcatagry(data))
  }, [])

  return (
    <div className='btm_headar'>
      <div className="conteaner">
        <nav className='nav'>

          <div className="catagry_nav">
            <div className="catgry_btm" onClick={()=> setIsopen(!isopen)}>
              <MdOutlineMenu />
              <p>Brows Categry</p>
              <IoMdArrowDropdown />
            </div>

            <div className={`catgry_nav_list ${isopen ? "active" : ""}`}>

              {catagry.map((cat) => (

                <Link key={cat.slug} to={`/category/${cat.slug}`}>{cat.name}</Link>
              ))}
            </div>
          </div>


          <div className="nav_links">
            {NavLinks.map((item) => (

              <li key={item.link} className={location.pathname===item.link ? "active" : ""}><Link to={item.link}>{item.title}</Link></li> 
            ))}

          </div>
        </nav>

        <div className="sign_register">
          {user ? (
            <>
              <Link to="/profile" title="Profile"><FaUserPlus /></Link>
              <Link to="/" onClick={logout} title="Logout"><FaSignOutAlt /></Link>
            </>
          ) : (
            <>
              <Link to="/login" title="Login"><PiSignInThin /></Link>
              <Link to="/login" title="Register"><FaUserPlus /></Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default BtmHeadar
