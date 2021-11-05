import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import "./Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar,Container,Nav } from "react-bootstrap";
import Anne1 from   "../../assets/home/img/annefrank.png"

export default function Header2(){

    const [pageName, setPageName] = useState();

    useEffect(() => {
        const pageNameNow = window.location.pathname;
        if (pageNameNow === "/") {
            setPageName("Anne Frank");
        } else if (pageNameNow === "/museum") {
            setPageName("Museum");
        } else if (pageNameNow === "/concentrationCamp") {
            setPageName("Concentration Camp");
        }
    }, []);

    return(
        <header>
            <Navbar className="nav-ul">
                <Container>
                    <Navbar.Brand className="Title-header" href="/" style={{color:'white' }}>
                        &#10051; {pageName === '' ? 'Anne Frank' : pageName}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto my-2 my-lg-0 ul-header-li" style={{ maxHeight: '100px'}} navbarScroll>
                            <Link 
                                to="/" 
                                style={{color: "white"}}
                                onClick={() => setPageName('Anne Frank')}
                            >
                                Home
                            </Link>

                            <Link 
                                to="/museum" 
                                style={{color: "white"}}
                                onClick={() => setPageName('Museum')}
                            >
                                Museum
                            </Link>

                            <Link  
                                to="/concentrationCamp" 
                                style={{color: "white"}}
                                onClick={() => setPageName('Concentration Camp')}
                            >
                                Concentration Camp
                            </Link >

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {
                pageName === ('Anne Frank' || '')  &&
                <Navbar className="div-banner" style={{padding: '0'}}>
                    <img className="banner" src={Anne1}></img>
                </Navbar>
            }
            
        </header>
    )

}