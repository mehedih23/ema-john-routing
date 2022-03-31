import './Cart.css';
import React from 'react'

const Cart = (props) => {
    const { cart } = props;
    console.log(cart);
    let quantity = 0;
    let price = 0;
    let tax = 0;
    let shipping = 0;
    for (const product of cart) {
        quantity = product.quantity + quantity;
        price = product.price * product.quantity;
        tax += price * 0.08;
        shipping += product.shipping;
    }

    return (
        <div>
            <h1 className='text-2xl text-center my-4 font-bold'>Cart</h1>
            <h2 className='text-xl my-1'>Selected Items : <b>{quantity}</b></h2>
            <h2 className='text-xl my-1'>Price : <b>${price}</b></h2>
            <h2 className='text-xl my-1'>Tax : <b>${tax.toFixed(2)}</b></h2>
            <h2 className='text-xl my-1'>Shipping Charge : <b>${shipping}</b></h2>
            <h2 className='text-xl my-1'>Grand Total : <b>${(price + tax + shipping).toFixed(2)}</b></h2>
            {
                props.children
            }
        </div>
    )
}

export default Cart