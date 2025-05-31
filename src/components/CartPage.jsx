import React from 'react';
import { useCart } from '../context/CartContext';

function CartPage() {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {cartItems.length === 0 ? <p>Cart is empty</p> : (
                <div>
                    {cartItems.map(item => (
                        <div key={item._id} className="border p-2 mb-2 rounded">
                            <h2>{item.title}</h2>
                            <p>${item.price}</p>
                            <input
                                type="number"
                                value={item.quantity}
                                min="1"
                                onChange={e => updateQuantity(item._id, parseInt(e.target.value))}
                                className="w-16 border rounded px-2"
                            />
                            <button onClick={() => removeFromCart(item._id)} className="ml-2 text-red-500">Remove</button>
                        </div>
                    ))}
                    <h2 className="text-xl font-bold mt-4">Total: ${total.toFixed(2)}</h2>
                </div>
            )}
        </div>
    );
}

export default CartPage;
