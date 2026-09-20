import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RiStarSFill } from "react-icons/ri";
import { IoIosStarHalf } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoIosShareAlt } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { carcontext } from "./cretcontext.jsx"
import { FaCheck } from "react-icons/fa";
import toast from 'react-hot-toast';
import { GiDuration } from 'react-icons/gi';



function Product({ product }) {



    const { addtocart, cart, addtowishlist, removeFromWishlist, isInWishlist } = useContext(carcontext)
    const navigate = useNavigate()

    const isincart = cart.some(item => item.id === product.id);
    const isinwishlist = isInWishlist(product.id);

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addtocart(product);
        toast.success(
            <div className='tost'>
                <img src={product.thumbnail} alt={product.title} className='tost-img' />
                <div className='tost-content'>
                    <h3>{product.title}</h3>
                    <p>Add to cart</p>
                    <button className='tost-buto' onClick={(e) => { e.stopPropagation(); navigate('/cart'); }}>View Cart</button>
                </div>
            </div>,
            {
                duration: 3000,
            }
        )
    }

    const handleShare = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const shareData = {
            title: product.title,
            text: `Check out this product: ${product.title}`,
            url: window.location.origin + `/products/${product.id}`
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                // User cancelled or error
            }
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(shareData.url);
            toast.success("Link copied to clipboard!");
        }
    }

    const handlewishlist = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isinwishlist) {
            removeFromWishlist(product.id)
            toast.error("Removed from wishlist")
        } else {
            addtowishlist(product)
            toast.success("Added to wishlist")
        }
    }

    return (
        <div className={`products ${isincart ? 'in-cart' : ''}`}>
            <Link to={`/products/${product.id}`}>

                <span className='statcart'><FaCheck />In Cart</span>
                <div className='img_product'>
                    <img src={product.thumbnail} alt={product.title} />

                </div>
                <p className="name_product">
                    {product.title}
                </p>

                <div className="stars">
                    {[...Array(4)].map((_, i) => (
                        <RiStarSFill key={i} />
                    ))}
                    <IoIosStarHalf />
                </div>

                <p className='pric_product'>
                    <span>${product.price}</span>
                </p>
            </Link>



            <div className="icon">
                <span onClick={handleAddToCart}>
                    <FaCartArrowDown />
                </span>
                <span onClick={handleShare}>
                    <IoIosShareAlt />
                </span>
                <span onClick={handlewishlist} style={{ color: isinwishlist ? '#0090f0' : 'inherit' }}>
                    {isinwishlist ? <FaHeart /> : <CiHeart />}
                </span>


            </div>
        </div>
    )
}

export default Product
