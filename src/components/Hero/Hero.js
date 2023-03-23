import React from 'react';
import Container from 'react-bootstrap/Container';
import hero from "../../assets/images/hero.webp"
import './style.css'

function HeroImage() {
    return (
        <Container fluid style={{ padding: 0 }}>
            <header style={{ paddingLeft: 0 }}>
                <div
                    className='p-5 text-center bg-image'
                    style={{ backgroundImage: `url(${hero})` }}
                >
                    <div className='mask'>
                        <div
                            className='d-flex justify-content-center align-items-center h-100'
                        >
                            <div className='hero-title' >
                                <h1 className='mb-3'>Rugby World Cup</h1>
                                <h4 className='mb-3'>France 2023</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Container>
    );
}

export default HeroImage;