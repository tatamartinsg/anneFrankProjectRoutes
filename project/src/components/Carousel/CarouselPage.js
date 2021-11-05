import React from "react";
import "./CarouselPage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";


export default function CarouselPage({imagens}){
    return (
        <Carousel variant="dark">
            {
                imagens.map((imagens, i) => (
                    <Carousel.Item key={i} >
                        <img
                        className="d-block img"
                        src={imagens.src}
                        alt={imagens.alt}
                        />
                    </Carousel.Item>
                ))
            }
        </Carousel>
    );
}