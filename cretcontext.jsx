import React, { createContext, useState, useEffect } from 'react'

export const carcontext = createContext()

export default function CarProvider({ children }) {
    const [cart, setcart] = useState(() => {
        const savedcart = localStorage.getItem("cart");
        return savedcart ? JSON.parse(savedcart) : [];
    })

    const [wishlist, setwishlist] = useState(() => {
        const savedwishlist = localStorage.getItem("wishlist");
        return savedwishlist ? JSON.parse(savedwishlist) : [];
    })

    const [user, setUser] = useState(() => {
        const saveduser = localStorage.getItem("user");
        return saveduser ? JSON.parse(saveduser) : null;
    })

    const addtocart = (product) => {
        setcart((prevcart) => [...prevcart, { ...product, quantity: 1 }])
    }

    const addtowishlist = (product) => {
        if (!wishlist.some(item => item.id === product.id)) {
            setwishlist((prevwishlist) => [...prevwishlist, { ...product, quantity: 1 }])
        }
    }

    const removeFromWishlist = (productId) => {
        setwishlist((prevwishlist) => prevwishlist.filter(item => item.id !== productId));
    };

    const isInWishlist = (productId) => {
        return wishlist.some(item => item.id === productId);
    }

    const increaseQuantity = (productId) => {
        setcart((prevcart) => 
            prevcart.map(item => 
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (productId) => {
        setcart((prevcart) => 
            prevcart.map(item => 
                item.id === productId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
            )
        );
    };

    const removeFromCart = (productId) => {
        setcart((prevcart) => prevcart.filter(item => item.id !== productId));
    };

    const clearCart = () => {
        setcart([]);
    };

    const login = (userData) => {
        setUser(userData)
    }

    const logout = () => {
        setUser(null)
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));

    }, [cart])

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));

    }, [wishlist])

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user])



    return (
        <carcontext.Provider value={{ cart, wishlist, user, addtocart, addtowishlist, removeFromWishlist, isInWishlist, increaseQuantity, decreaseQuantity, removeFromCart, clearCart, login, logout }}>
            {children}
        </carcontext.Provider>
    )
}
