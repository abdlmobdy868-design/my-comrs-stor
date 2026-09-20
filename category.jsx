import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Slideproducts from "./slideproducts.jsx"
import Loading from "./Loading.jsx"
import "./category.css"

function Category() {
  const { slug } = useParams()
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCategory = async () => {
      setLoading(true)
      try {
        // Get category info
        const categoriesRes = await fetch('https://dummyjson.com/products/categories')
        const categoriesData = await categoriesRes.json()
        const matchedCat = categoriesData.find(c => c.slug === slug)
        
        if (matchedCat) {
          setCategory(matchedCat)
          // Fetch products by category
          const productsRes = await fetch(`https://dummyjson.com/products/category/${slug}?limit=50`)
          const productsData = await productsRes.json()
          setProducts(productsData.products || [])
        }
      } catch (error) {
        console.error('Error fetching category:', error)
        setProducts([])
      }
      setLoading(false)
    }

    if (slug) {
      fetchCategory()
    }
  }, [slug])

  if (loading) {
    return <Loading />
  }

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>{category?.name || 'Category'}</h1>
        <p>{products.length} products found</p>
      </div>

      {products.length > 0 ? (
        <Slideproducts data={products} title={category?.name || 'Products'} />
      ) : (
        <div className="no-products">
          <p>No products found in this category</p>
        </div>
      )}
    </div>
  )
}

export default Category

