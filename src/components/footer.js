import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaX } from "react-icons/fa6";

class Footer extends Component{
    render(){
        return (
            <Container fluid className="bg-dark text-light">
                <Row className="flex-column align-items-center">
                    <Col className="footer-col">
                        <a className="footer-logo" href="https://github.com/HaswanthReddyK" target="_blank" rel="noreferrer"><FaGithub size={'1.5rem'} className="m-2"/></a>
                        <a className="footer-logo" href="https://www.linkedin.com/in/haswanthkondamadugula/" target="_blank" rel="noreferrer"><FaLinkedin size={'1.5rem'} className="m-2"/></a>
                        <a className="footer-logo" href="https://www.instagram.com/look_me_like_me/" target="_blank" rel="noreferrer"><FaInstagram size={'1.5rem'} className="m-2"/></a>
                        <a className="footer-logo" href="https://www.facebook.com/profile.php?id=61576953906945" target="_blank" rel="noreferrer"><FaFacebook size={'1.5rem'} className="m-2"/></a>
                        <a className="footer-logo" href="https://www.threads.com/@look_me_like_me" target="_blank" rel="noreferrer"><FaX size={'1.5rem'} className="m-2"/></a>
                    </Col>
                    <Col className="my-1 footer-col">
                        <a className="footer-logo" href="mailTo:hrkondamadugula13@gmail.com"><FaEnvelope size={'1.5rem'}/> : hrkondamadugula13@gmail.com</a>
                    </Col>
                    <Col className="mb-2 footer-col">
                        <span style={{fontSize: 12}}>Copyright 2024. All Rights Reserved</span>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Footer;
