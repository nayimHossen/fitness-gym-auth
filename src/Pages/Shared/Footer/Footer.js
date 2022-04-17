import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='bg-dark py-4 text-white mt-5'>
            <p className='text-center'>nayimh2015@gmil.com {year}</p>
        </footer>
    );
};

export default Footer;