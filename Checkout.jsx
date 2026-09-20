import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { carcontext } from "./cretcontext.jsx"

function Checkout() {
  const { cart, clearCart } = useContext(carcontext)
  const navigate = useNavigate()
  const [address, setAddress] = useState("")
  const [isPlacingOrder, setIsPlacingOrder] = useState(false)
  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  )

  const handlePlaceOrder = (event) => {
    event.preventDefault()
    setIsPlacingOrder(true)

    try {
      const savedOrders = JSON.parse(localStorage.getItem("orders") || "[]")
      const order = {
        id: Date.now(),
        items: cart,
        address,
        total,
        createdAt: new Date().toISOString(),
      }

      localStorage.setItem("orders", JSON.stringify([...savedOrders, order]))

      clearCart()
      navigate("/order-success")
    } catch (error) {
      alert(error.message || "Unable to save order. Please try again.")
    } finally {
      setIsPlacingOrder(false)
    }
  }

  return (
    <main className="checkout">
      <section className="ordersummary">
        <h2>Checkout</h2>
        <p>Total: ${total.toFixed(2)}</p>
        <form onSubmit={handlePlaceOrder}>
          <label htmlFor="address">Delivery address</label>
          <textarea
            id="address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            required
            rows="4"
            placeholder="Enter your delivery address"
          />
          <button type="submit" disabled={isPlacingOrder || cart.length === 0}>
            {isPlacingOrder ? "Placing..." : "Place Order"}
          </button>
        </form>
      </section>
    </main>
  )
}

export default Checkout