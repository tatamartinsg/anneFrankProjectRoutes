import React from "react";
import { Link } from 'react-router-dom';
import "./Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar,Container,Nav } from "react-bootstrap";
import Anne1 from   "../../assets/home/img/annefrank.png"

export default function Header2(){
    return(
        <header>
            <Navbar className="nav-ul">
                <Container>
                    <Navbar.Brand className="Title-header" href="/" style={{ fontSize: '30px', color:'white' }}>
                        &#10051; Anne Frank
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto my-2 my-lg-0 ul-header-li" style={{ maxHeight: '100px'}} navbarScroll>
                            <Nav.Link href="/" style={{color: "white"}}>Home</ Nav.Link>
                            <Nav.Link href="/museum" style={{color: "white"}}>Museum</Nav.Link>
                            <Nav.Link  href="/concentrationCamp" style={{color: "white"}}>Concentration Camp</Nav.Link >
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar className="div-banner" style={{padding: '0'}}>
                <img className="banner" src={Anne1}></img>
            </Navbar>
            
        </header>
    )

}