import { useEffect, useState } from 'react';
import { addedCart } from '../../utilities/fakedb';


const useCart = (products) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = addedCart();
        const getStoredCart = [];
        for (const id in storedCart) {
            const product = products.find(product => product.id === id);
            if (product) {
                const quantity = storedCart[id];
                product.quantity = quantity;
                getStoredCart.push(product);
            }
        }
        setCart(getStoredCart);
    }, [products]);

    return [cart, setCart];
}
export default useCart;