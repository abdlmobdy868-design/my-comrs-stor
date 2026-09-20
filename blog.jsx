import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from "./Loading.jsx"
import "./blog.css"

function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  // Sample blog posts data
  const samplePosts = [
    {
      id: 1,
      title: 'Top 10 Shopping Tips for 2024',
      excerpt: 'Discover the best tips and tricks to make the most of your online shopping experience this year.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400',
      date: 'January 15, 2024',
      category: 'Shopping Tips'
    },
    {
      id: 2,
      title: 'How to Find the Best Deals Online',
      excerpt: 'Learn how to compare prices, use coupons, and maximize your savings while shopping online.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
      date: 'January 10, 2024',
      category: 'Money Saving'
    },
    {
      id: 3,
      title: 'Understanding Product Quality',
      excerpt: 'A guide to understanding product specifications and choosing the best quality items.',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
      date: 'January 5, 2024',
      category: 'Guide'
    },
    {
      id: 4,
      title: 'Secure Shopping: Protect Your Information',
      excerpt: 'Important tips on how to shop safely online and protect your personal data.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400',
      date: 'December 28, 2023',
      category: 'Security'
    },
    {
      id: 5,
      title: 'New Year Sale Preview',
      excerpt: 'Get ready for amazing discounts and special offers in our upcoming New Year sale.',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400',
      date: 'December 20, 2023',
      category: 'News'
    },
    {
      id: 6,
      title: 'Gift Buying Guide for Every Occasion',
      excerpt: 'Find the perfect gift for your loved ones with our comprehensive buying guide.',
      image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400',
      date: 'December 15, 2023',
      category: 'Guide'
    }
  ]

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setPosts(samplePosts)
      setLoading(false)
    }, 500)
  }, [])

  return (
    <div className="blog-page">
      <div className="blog-container">
        <h1>Our Blog</h1>
        <p className="blog-intro">Latest news, tips, and insights from our team</p>

        {loading ? (
          <Loading />
        ) : (
          <div className="blog-grid">
            {posts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-content">
                  <span className="blog-date">{post.date}</span>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="read-more">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog

