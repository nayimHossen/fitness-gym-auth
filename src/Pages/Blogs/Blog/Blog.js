import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Blog = ({ blog }) => {
    const { title, ans } = blog;

    return (
        <div>
            <Card className='my-3'>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{ans}</Card.Text>
                    <Button variant="danger" className='ml-end'>See all....</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blog;