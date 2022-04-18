import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import img from '../../images/my.png';
import './About.css';

const About = () => {
    return (
        <div style={{ height: "100vh" }}>
            <Container>
                <Row className='mt-4'>
                    <Col>
                        <img className='about-img' src={img} alt="" />
                    </Col>
                    <Col>
                        <Card border="danger" className='rounded-md' style={{ height: "30rem" }}>
                            <Card.Body>
                                <Card.Title>My goal</Card.Title>
                                <p>
                                    I want to be a professional developer. I make a good career in this field. Now I am trying to quality learning and best code practicing. After one month I want to start my career as a web application developer. now I spend the most time learning code and practicing code. This is my everyday primary work.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;