import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();

    const navigateToCheckout = (id) => {
        navigate(`/checkout/${id}`)
    };

    return (
        <div className='border-2 p-4 rounded text-center my-4'>
            <img className='w-100 mb-3' src={img} alt="" />
            <h5>This is service: {name}</h5>
            <p>{description}</p>
            <h4>Price: ${price}</h4>
            <button onClick={() => navigateToCheckout(id)} className='bg-red-600 p-2 rounded text-white'>Checkout</button>
        </div>
    );
};

export default Service;