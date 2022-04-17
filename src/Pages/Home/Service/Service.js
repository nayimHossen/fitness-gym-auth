import React from 'react';

const Service = ({ service }) => {

    const { name, img, description, price } = service;

    return (
        <div className='border-2 p-6 rounded text-center'>
            <img className='w-100' src={img} alt="" />
            <h2>This is service: {name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button className='bg-red-600 p-2 rounded text-white'>Book: {name}</button>
        </div>
    );
};

export default Service;