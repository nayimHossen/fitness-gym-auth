import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();

    const navigateToCheckout = (id) => {
        navigate(`/checkout/${id}`)
    };

    return (
        <div className='border-2 p-6 rounded text-center'>
            <img className='w-100' src={img} alt="" />
            <h2>This is service: {name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToCheckout(id)} className='bg-red-600 p-2 rounded text-white'>Checkout</button>
        </div>
    );
};

export default Service;