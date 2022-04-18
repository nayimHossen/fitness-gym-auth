import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='py-4 text-dark bg-primary' >
            <p className='text-center'>nayimh2015@gmil.com {year}</p>
        </footer>
    );
};

export default Footer;