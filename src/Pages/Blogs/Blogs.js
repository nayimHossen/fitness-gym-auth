import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import Blog from './Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    return (

        <div>
            <Container>
                <h2 className='text-center my-3 text-bold'>My Blogs</h2>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </Container>
        </div>
    );
};

export default Blogs;