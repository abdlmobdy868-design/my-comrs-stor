import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Slideproducts from '../../compnt/slideproducts/slideproducts'
import Loading from '../../compnt/Loading/Loading'
import './search.css'

function Search() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSearch = async () => {
      setLoading(true)
      try {
        // Fetch products by search query
        const searchResponse = await fetch(`https://dummyjson.com/products/search?q=${query}&limit=50`)
        const searchData = await searchResponse.json()
        
        // Fetch all categories
        const categoriesResponse = await fetch('https://dummyjson.com/products/categories')
        const categoriesData = await categoriesResponse.json()
        
        // Check if query matches any category
        const matchedCategory = categoriesData.find(cat => 
          cat.slug.toLowerCase() === query.toLowerCase() || 
          cat.name.toLowerCase() === query.toLowerCase()
        )
        
        let categoryProducts = []
        if (matchedCategory) {
          // Fetch products from matched category
          const categoryResponse = await fetch(`https://dummyjson.com/products/category/${matchedCategory.slug}?limit=50`)
          const categoryData = await categoryResponse.json()
          categoryProducts = categoryData.products || []
        }
        
        // Combine and deduplicate products
        const searchProducts = searchData.products || []
        const allProducts = [...searchProducts]
        
        // Add category products that aren't already in search results
        categoryProducts.forEach(product => {
          if (!allProducts.find(p => p.id === product.id)) {
            allProducts.push(product)
          }
        })
        
        setProducts(allProducts.slice(0, 30))
      } catch (error) {
        console.error('Error searching products:', error)
        setProducts([])
      }
      setLoading(false)
    }

    if (query) {
      fetchSearch()
    } else {
      setProducts([])
      setLoading(false)
    }
  }, [query])

  if (loading) {
    return <Loading />
  }

  return (
    <div className="search-page">
      <div className="search-header">
        <h2>Search Results for "{query}"</h2>
        <p>{products.length} products found</p>
      </div>

      {products.length > 0 ? (
        <Slideproducts data={products} title="Search Results" />
      ) : (
        <div className="no-results">
          <p>No products found for "{query}"</p>
        </div>
      )}
    </div>
  )
}

export default Search

