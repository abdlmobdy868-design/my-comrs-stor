import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import './productdetails.css'
import Slideproducts from '../../compnt/slideproducts/slideproducts';
import { carcontext } from '../../compnt/context/cretcontext.jsx';
import toast from 'react-hot-toast';
import Loading from '../../compnt/Loading/Loading';

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [loadingRelated, setLoadingRelated] = useState(true);
    
    const { addtocart } = useContext(carcontext);

    const handleAddToCart = () => {
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
    };

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    useEffect(() => {
        if (!product) return;

        const fetchRelatedProducts = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/category/${product.category}`);
                const data = await response.json();
                setRelatedProducts(data.products);
            } catch (error) {
                console.error(error);
            } finally {
                setLoadingRelated(false);
            }
        };
        fetchRelatedProducts();
    }, [product]);

    if (loading) {
        return <Loading />;
    }
    if (product === null) {
        return <p>Product not found</p>;
    }

    return (
        <div className='itemdetails'>
            <div className="contenar">
                <div className="img-item">
                    <div className="big-item">
                        <img id='big_img' src={product.images[0]} alt={product.title} />
                    </div>
                    <div className="smal-img">
                        {product.images.map((img, index) => (
                            <img 
                                key={index} 
                                src={img} 
                                alt={product.title} 
                                onClick={() => document.getElementById("big_img").src = img} 
                            />
                        ))}
                    </div>
                </div>

                <div className="details-item">
                    <h1 className='name'>{product.title}</h1>
                    <div className="stars">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className="star">★</span>
                        ))}
                    </div>

                    <p className='price'>${product.price}</p>
                    <h5>Availability: <span>{product.stock > 0 ? "In Stock" : "Out of Stock"}</span></h5>
                    <h5>Brand: <span>{product.brand}</span></h5>
                    <p className='description'>{product.description}</p>
                    <h5 className='star'>Hurry up only <span>{product.stock}</span> products left in stock</h5>

                    <button className='btn' onClick={handleAddToCart}>
                        Add to cart <FaCartShopping />
                    </button>

                    <div className="icons">
                        <span><CiHeart /></span>
                    </div>
                </div>
            </div>

            {loadingRelated ? (
                <p>Loading related products...</p>
            ) : (
                <Slideproducts key={product.category} data={relatedProducts} title={product.category.replace(/-/g, " ")} />
            )}
        </div>
    );
}

export default ProductDetails;
