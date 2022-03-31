import './OrderedItem.css';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const OrderedItem = (props) => {
    const { product, handleRemoveItem } = props;
    console.log(product);
    const { name, img, price, quantity, id } = product;
    return (
        <div className='md:w-[400px] lg:w-[500px] flex items-center justify-start gap-4 border border-gray-300 my-4'>
            <div className='w-[91px] h-[91px] p-1'>
                <img src={img} alt="" />
            </div>
            <div className='flex items-center justify-between w-[230px] md:w-[270px] lg:w-[370px]'>
                <div>
                    <h2 title={name}>{name.length > 20 ? name.slice(0, 20) : name}</h2>
                    <h2>${price}</h2>
                    <h2>Quantity : {quantity}</h2>
                </div>
                <div className='trashBtn'>
                    <button onClick={() => handleRemoveItem(id)}>
                        <FontAwesomeIcon className='trashIcon' icon={faTrashAlt} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OrderedItem