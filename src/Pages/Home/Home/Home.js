import React from 'react';
import Services from '../Services/Services';
import img1 from '../../../images/work-1.jpg';

const services = [
    { id: 1, name: 'olid change', price: 100, description: '', img: img1 }
];

const Home = () => {
    return (
        <div>
            <Services />
        </div>
    );
};

export default Home;