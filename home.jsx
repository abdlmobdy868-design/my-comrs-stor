import React, { useEffect, useState } from 'react'
import Heroslider from '../../compnt/heroslider'
import Slideproducts from '../../compnt/slideproducts/slideproducts'
import Loading from '../../compnt/Loading/Loading'

import './home.css'

const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "tablets",
  "sports-accessories",
  "sunglasses",
]

function Home() {
  const [products, setProducts] = useState({})
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await Promise.all(
          categories.map(async (category) => {
            const response = await fetch(`https://dummyjson.com/products/category/${category}`);
            const data = await response.json();
            return { [category]: data.products };
          })
        );

        const productsData = Object.assign({}, ...result);
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error('error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Heroslider />
      {
        loading ? (
          <Loading />
        ) : (
          categories.map((category) => (
            <Slideproducts key={category} data={products[category]} title={category.replace(/-/g, " ")} />
          ))
        )
      }
    </div>
  )
}

export default Home
