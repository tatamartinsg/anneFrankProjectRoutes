import React from "react";
import "./MiddleCamp.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import CarouselPage from "../../../components/Carousel/CarouselPage";
import { ImagesConCamp } from "../../../Utils/Images";


export default function Middle(){
    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={12}>
                        <br></br>
                        <CarouselPage imagens={ImagesConCamp} />
                    </Col>
                </Row>
                <Row>
                    <h3 className="intro">
                        "Bergen-Belsen was the death place of Anne and Margot Frank,
                    </h3>
                    <h3 className="intro">
                        who both died of typhus there in February or March 1945,
                    </h3>
                    <h3 className="intro">
                        shortly before the camp was liberated on April 15, 1945."
                    </h3>
                </Row>
                <br></br>
                <Row>
                    <Col md={6} className="col-title">
                        <h1 className="title-left">History</h1>
                    </Col>
                    <Col md={6}>
                        <p className="content-right" >
                            Bergen-Belsen, or Belsen, was a Nazi concentration camp in what is today Lower Saxony in northern Germany, southwest of the town of Bergen near Celle.
                            Originally established as a prisoner of war camp, in 1943, parts of it became a concentration camp.
                            Initially this was an "exchange camp", where Jewish hostages were held with the intention of exchanging them for German prisoners of war held overseas.
                            The camp was later expanded to accommodate Jews from other concentration camps.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className="col-title">
                        <h1 className="title-left">Concentration</h1>
                        <h1 className="title-left-2">Camp</h1>
                    </Col>
                    <Col md={6}>
                        <p className="content-right">
                            In August 1944, a new section was created and this became the so-called "women's camp".
                            By November 1944 this camp received around 9,000 women and young girls.
                            Most of those who were able to work stayed only for a short while and were then sent on to other concentration camps or slave-labour camps.
                            The first women interned there were Poles, arrested after the failed Warsaw Uprising.
                            Others were Jewish women from Poland or Hungary, transferred from Auschwitz.
                            Margot and Anne Frank died there in February or March 1945.
                        </p>
                    </Col>
                    <Col md={6} className="col-title">
                        <h1 className="title-left">Memorial</h1>
                    </Col>
                    <Col md={6}>
                        <p className="content-right">
                            For a long time, remembering Bergen-Belsen was not a political priority.
                            Periods of attention were followed by long phases of official neglect.
                            For much of the 1950s, Belsen "was increasingly forgotten as a place of remembrance".
                            Only after 1957 did large groups of young people visit the place where Anne Frank had died.
                            In 1966, a document centre was opened which offered a permanent exhibition on the persecution of the Jews,
                            with a focus on events in the nearby Netherlands – where Anne Frank and her family had been arrested in 1944.
                        </p>
                    </Col>
                </Row>
            </Container>
            <br></br>
            
        </>
    );
}