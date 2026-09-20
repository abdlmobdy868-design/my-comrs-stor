import { Routes, Route, useLocation } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import BtmHeadar from "./BtmHeadar.jsx"
import TopHeadar from "./TopHeadar.jsx"
import Footer from "./Footer.jsx"
import Home from "./home.jsx"
import ProductDetail from "./productdetails.jsx"
import Cart from "./cart.jsx"
import Checkout from "./Checkout.jsx"
import Search from "./search.jsx"
import Category from "./category.jsx"
import Wishlist from "./wishlist.jsx"
import Login from "./login.jsx"
import Profile from "./profile.jsx"
import About from "./about.jsx"
import Contact from "./contact.jsx"
import Blog from "./blog.jsx"
import Accessories from "./accessories.jsx"
import { AnimatePresence, motion } from "framer-motion"

function App() {
  const location = useLocation()
  
  return (
    <>
      <header>
        <TopHeadar />
        <BtmHeadar />
      </header>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#333',
            color: '#fff',
          }
        }}
      />
    
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<h1>Order placed successfully</h1>} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/search" element={<Search />} />
            <Route path="/category/:slug" element={<Category />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/accessories" element={<Accessories />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
        
      <Footer />
      </>
  )
}

export default App
