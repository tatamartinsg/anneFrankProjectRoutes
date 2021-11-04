import React from "react";
import "./CarouselPage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import cc1 from "../../../assets/home/img/diarioanne2.jpg";
import cc2 from "../../../assets/home/img/anne2.jpg";
import cc3 from "../../../assets/home/img/diarioAnne.jpg";

export default function CarouselPage(){
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                className="d-block img"
                src={cc1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block img"
                src={cc2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block img"
                src={cc3}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}