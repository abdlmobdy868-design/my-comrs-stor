import { Routes, Route, useLocation } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import BtmHeadar from "./compnt/Headar/BtmHeadar"
import TopHeadar from "./compnt/Headar/TopHeadar"
import Footer from "./compnt/Footer/Footer"
import Home from "./page/home/home"
import ProductDetail from "./page/productdetails/productdetails"
import Cart from "./page/cart/cart"
import Search from "./page/search/search"
import Category from "./page/category/category"
import Wishlist from "./page/wishlist/wishlist"
import Login from "./page/login/login"
import Profile from "./page/profile/profile"
import About from "./page/about/about"
import Contact from "./page/contact/contact"
import Blog from "./page/blog/blog"
import Accessories from "./page/accessories/accessories"
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
