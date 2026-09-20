import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RiStarSFill } from "react-icons/ri";
import { IoIosStarHalf } from "react-icons/io";
import Loading from "./Loading.jsx"
import { carcontext } from "./cretcontext.jsx"
import { useContext } from 'react'
import toast from 'react-hot-toast'
import "./accessories.css"

function Accessories() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const { addtocart, cart } = useContext(carcontext)

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'mobile-accessories', name: 'Mobile Accessories' },
    { id: 'sports-accessories', name: 'Sports Accessories' },
    { id: 'sunglasses', name: 'Sunglasses' },
    { id: 'watches', name: 'Watches' },
    { id: 'jewelry', name: 'Jewelry' }
  ]

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const categoriesToFetch = selectedCategory === 'all' 
          ? ['mobile-accessories', 'sports-accessories', 'sunglasses', 'watches', 'jewelry']
          : [selectedCategory]

        const result = await Promise.all(
          categoriesToFetch.map(async (category) => {
            const response = await fetch(`https://dummyjson.com/products/category/${category}`);
            const data = await response.json();
            return data.products;
          })
        );

        const allProducts = result.flat()
        setProducts(allProducts)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching products:', error)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [selectedCategory])

  const handleAddToCart = (product) => {
    addtocart(product)
    toast.success(
      <div className='tost'>
        <img src={product.thumbnail} alt={product.title} className='tost-img' />
        <div className='tost-content'>
          <h3>{product.title}</h3>
          <p>Added to cart!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="accessories-page">
      <div className="accessories-container">
        <h1>Accessories</h1>
        <p className="accessories-intro">Browse our collection of premium accessories</p>

        <div className="category-filter">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {loading ? (
          <Loading />
        ) : (
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="accessory-card">
                <Link to={`/products/${product.id}`}>
                  <div className="accessory-image">
                    <img src={product.thumbnail} alt={product.title} />
                  </div>
                  <div className="accessory-info">
                    <h3>{product.title}</h3>
                    <div className="accessory-rating">
                      <RiStarSFill />
                      <IoIosStarHalf />
                      <span>({product.rating})</span>
                    </div>
                    <p className="accessory-price">${product.price}</p>
                  </div>
                </Link>
                <button 
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Accessories

