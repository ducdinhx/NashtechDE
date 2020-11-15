import React from 'react';
import { Navbar, Container, Col } from 'react-bootstrap';

const Footer = () => {
    let fullYear = new Date().getFullYear();
    return (
        <Navbar fixed="bottom" bg="dark" variant="dark">
            <Container>
                <Col lg={12} className="text-center text-muted">
                    <div>{fullYear} - {fullYear +1},  DE: Dinh Xuan Duc - NashTech Company - Java Team</div>
                </Col>
            </Container>

        </Navbar>

    );
}

export default Footer;
