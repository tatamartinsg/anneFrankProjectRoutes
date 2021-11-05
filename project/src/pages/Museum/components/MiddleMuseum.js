import React from "react";
import "./MiddleMuseum.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import CarouselPage from "../../../components/Carousel/CarouselPage";
import cc2 from "../../../assets/museum/casa-anne-frank-amsterdam1.jpg";
import { ImagesMuseum } from "../../../Utils/Images";

export default function Middle(){
    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={12}>
                        <br></br>
                        <CarouselPage imagens={ImagesMuseum} />
                    </Col>
                </Row>
                <Row>
                    <h3 className="intro">
                    What is a visit to the Anne Frank Museum in Amsterdam like
                    </h3>
                </Row>
                <br></br>
                <Row>
                    <Col md={12}>
                        <p className="content-right">
                           The former house that served as a hideout for the Anne Frank family and the Van Pel family has been transformed into
                           a Museum since 1960.Thousands of people from all over the world visit the place, moved by the story of Anne Frank and 
                           also interested in knowing what the hiding place in which she lived and wrote her fabulous diary was like. 
                           Many others have not had contact with the story of Anne Frank and end up getting to know them when they visit.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <p className="content-right">
                        The house is kept with the windows closed, to try to incorporate the environment as it was during the hiding place. 
                        It is possible to go through the rooms of the house and read several excerpts from Anne Frank's diary telling stories
                        and facts about her cloistered life related to each environment. There are phrases projected on the wall, photos, 
                        films and objects that try to illustrate a little of what happened inside that place and in the lives of those people. 
                        </p>
                        <p className="content-right">
                        <center>
                        <img
                            className="d-block img"
                            src={cc2}
                            alt="First slide"
                        />
                        </center>
                        </p>
                        
                    
                    </Col>
                    <Col md={6} className="col-title">
                        <h1 className="title-left">How much does it cost to visit the Anne Frank Museum in Amsterdam</h1>
                    </Col>
                    <Col md={6}>
                        <p className="content-right">
                        Adults pay 9 euros, children and teenagers from 10 to 17 years pay 4.50 euros, and children up to 9 years old have free entry.

                        As the Anne Frank House is one of the most visited tourist spots in Amsterdam, there are always queues, so it is best to 
                        purchase your ticket online. <a className="information" href = "https://www.annefrank.org/en/museum/practical-information/" target = "_blank">See more information here.</a></p>
                        
                        <p className="content-right">
                        Buy your Anne Frank Museum ticket online and skip the lines

                        This ticket option is a combo offered by Ticket Bar, one of the best and most reliable companies to buy tickets and tours in Europe. 
                        Next to the museum entrance you have the right to the hop on hop off tourist bus, with two floors around the city. The cool thing about
                        this bus tour is the possibility of seeing several sights of the city choosing where to get off and take the bus again, valid for 24 hours.
                            
                        </p>
                    </Col>
                </Row>
            </Container>
            <br></br>
            
        </>
    );
}