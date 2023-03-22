import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import hero from "../../assets/images/hero.webp"
import './style.css'
function HeroImage() {
    return (
        <Container fluid style={{ padding: 0}}>
            <Row>
                <Col>
                    <header style={{ paddingLeft: 0 }}>
                        <div
                            className='p-5 text-center bg-image'
                            style={{ display: 'flex', justifyContent:'center', alignItems:'center', backgroundImage: `url(${hero})`, height: 600, backgroundPosition: 'top', backgroundSize: 'cover' }}
                        >
                            <div className='mask'>
                                <div className='d-flex justify-content-center align-items-center h-100'>
                                    <div className='text-white' style={{padding:'50px 100px', backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                                        <h1 className='mb-3'>Rugby World Cup</h1>
                                        <h4 className='mb-3'>France 2023</h4>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </Col>
            </Row>
        </Container>
    );
}

export default HeroImage;