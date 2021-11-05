import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MiddleHome.css"
import { Container, Row, Col } from "react-bootstrap";
import Anne from "../../../assets/home/img/anne.jpg"
import Deportacao from "../../../assets/home/img/deportacao.jpg"
import CarouselPage from "../../../components/Carousel/CarouselPage";
import { ImagesHome } from "../../../Utils/Images";

export default function Middle(){
    return(
        <Container>
            <h1 className="h1-principal">
“I can shake off everything if I write; my sorrows disappear, my courage is reborn. But, and that is the greatest question, will I ever be able to write anything great, will I ever become a journalist or a writer? I hope so, oh, I hope so very much, for I can recapture everything when I write, my thoughts, my ideas and my fantasies.”
</h1>
            <Row className="justify-content-md-center">
                <Col>
                    <br></br>
                    <CarouselPage imagens={ImagesHome} />
                </Col>
            </Row>

            <Row className="quemfoiAnne">
                <Col className="div-corpo">
                    <Row>
                        <h1>Who was Anne Frank?</h1>
                    </Row>
                    <img class="anneCorpo" src={Anne}></img>
                    <p className="p-1">
                    The young Jewish woman, Anne Frank, born in Frankfurt, Germany, on June 12, 1929, had her adolescence taken by the invasion and persecution of the Nazis, during the Second World War, which lasted about six years, between 1939 and 1945. Anne Frank's life story was revealed to the world due to the publication of her diary by her father, Otto Frank.</p>
                    <p>In Anne Frank's diary, the girl related her life before and during the Nazi invasion in her country and her escape to a hiding place. Frank reported in his diary her teenage loves, the fights in her family, her relationship with her parents, wrote about her sister and friends, in addition, she wrote how difficult it was to remain hidden , the rules, the fear and the loneliness.</p>
                    <p>
                    Currently, the items and Anne's the hiding place are preserved in the museum in Amsterdam, Netherlands, with the right to visit. If you have interest and curiosity, it's worth a visit to the place!
                    </p>

                </Col>
                
            </Row>
            <Row className="deportacao">
                <h2>Anne's life totally changes after the Nazi invasion</h2>
                <img class="img-deportacao" src={Deportacao}></img>
                <p>Years before the outbreak of World War II, in 1933, the Nazis took power in Germany through the appointment of Adolf Hitler as the country's chancellor. Hitler's politics and anti-Semitic ideal did not agree with Anne Frank's family. Furthermore, the economic crisis of the German nation was only expanding, harming local living conditions.
                </p>
                <p>From then on, in an attempt to have a better life, Frank and her family fled to the Netherlands, where they thought they would be safe. However, Hitler's troops invaded Dutch territory and began to impose various restrictions on Jews, such as the mandatory identification of the Jewish person, using a yellow star on their clothes, the prohibition of Jews to ride trams, visit cinemas, theaters, many places. As the days passed, the restrictions tightened and the Frank's family, feeling despair, moved to a hideout in Prinsengrecht, where they stayed for approximately two years until the day they were discovered and taken to the Concentration Camps by Nazi troops.
                </p>
            </Row>
,

        </Container>
    )
}