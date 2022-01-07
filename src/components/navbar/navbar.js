import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
//import logo1 from '../../../public/images/logo1.svg'
export default function NavbarComponent() {
    return (
        <>
            <Navbar  expand="lg" className=" Mynav">
                <Container className="justify-content-evenly">
                    <div className="col-1"></div>
                    <Navbar.Brand href="#home" className="col-md-2 col-sm-6">
                        <img
                            alt="logo"
                            src='images/logo1.svg'
                            className="d-inline-block  me-1"
                        />{' '}
                        <img
                            alt="logo"
                            src='images/logo2.svg'
                            className="d-inline-block  ms-1"
                        />{' '}
                    </Navbar.Brand>
                    
                        <p className="align-self-center my-1 navbar-text mx-2 col-md-4 col-sm-9">
                             {"< valentine's day offers! Buy Two Get One Free "}
                             <a href="#">Shop Now</a>
                             {" >"}
                              </p>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="col-3">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className="navbar-text"><span className="me-1">
                                <img
                                    src="images/contact-us.svg"
                                />
                            </span>contact us</Nav.Link>
                            <Nav.Link href="#link" className="navbar-text"><span className="me-1">
                                <img
                                    src="images/track-order.svg"
                                /></span>track an order</Nav.Link>
                            <Nav.Link href="#link" className="navbar-text"><span className="me-1">
                                <img
                                    src="images/find-a-store.svg"
                                /></span>find a store</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    
                    



                </Container>
            </Navbar>
        </>
    )
}