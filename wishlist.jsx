import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { carcontext } from '../../compnt/context/cretcontext.jsx'
import Slideproducts from '../../compnt/slideproducts/slideproducts'
import './wishlist.css'

function Wishlist() {
  const { wishlist, removeFromWishlist, addtocart } = useContext(carcontext)

  const handleRemove = (productId) => {
    removeFromWishlist(productId)
  }

  const handleAddToCart = (product) => {
    addtocart(product)
    removeFromWishlist(product.id)
  }

  if (wishlist.length === 0) {
    return (
      <div className="wishlist-page">
        <div className="wishlist-empty">
          <h2>Your Wishlist is Empty</h2>
          <p>Add items to your wishlist to see them here</p>
          <Link to="/" className="continue-shopping">Continue Shopping</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="wishlist-page">
      <div className="wishlist-header">
        <h2>My Wishlist</h2>
        <p>{wishlist.length} products</p>
      </div>

      <Slideproducts data={wishlist} title="Wishlist Products" />
    </div>
  )
}

export default Wishlist

