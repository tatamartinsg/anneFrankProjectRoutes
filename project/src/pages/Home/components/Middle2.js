import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Middle2.css"
import { Container, Row, Col } from "react-bootstrap";
import Anne from "../../../assets/home/img/anne.jpg"
import Deportacao from "../../../assets/home/img/deportacao.jpg"
import CarouselPage from "./CarouselPage";

export default function Middle(){
    return(
        <Container>
            <h1 className="h1-principal">"Quando escrevo, sinto um alívio, a minha dor desaparece, a coragem volta. Mas pergunto-me: escreverei alguma vez alguma coisa de importância? Virei a ser jornalista ou escritora? Espero que sim, espero-o de todo o meu coração! Ao escrever sei esclarecer tudo, os meus pensamentos, os meus ideais, as minhas fantasias."</h1>
            <Row className="justify-content-md-center">
                <Col>
                    <br></br>
                    <CarouselPage></CarouselPage>
                </Col>
            </Row>

            <Row className="quemfoiAnne">
                <Col className="div-corpo">
                    <Row>
                        <h1>Quem foi Anne Frank?</h1>
                    </Row>
                    <img class="anneCorpo" src={Anne}></img>
                    <p className="p-1">
                    A jovem judia, Anne Frank, nascida em Frankfurt, Alemanha, em 12 de junho de 1929, teve sua adolescência tomada pela invasão e perseguição dos nazistas, no período da Segunda Grande Guerra Mundial que durou cerca de seis anos, entre 1939 a 1945. A história de vida de Anne Frank foi revelada ao mundo devido à publicação de seu diário pelo seu pai, Otto Frank.</p>
                    <p>No diário de Anne Frank, a garota relatou sua vida antes e durante a invasão nazista em seu país e sua fuga ao esconderijo. Frank relatou em seu diário seus amores de adolescência, as brigas em sua família, sua relação com seus pais, sua irmã e seus amigos, além disso, escreveu o quanto era difícil manter-se escondida no esconderijo, as regras, o medo e a solidão.</p>
                    <p>
                        Atualmente, os itens e o esconderijo de Anne e sua família estão conservados no museu em Amsterdã, na Holanda, com direito à visitação. Se você possui interesse e curiosidade, vale a pena realizar uma visita ao local!
                    </p>

                </Col>
                
            </Row>
            <Row className="deportacao">
                <h2>A vida de Anne muda totalmente após a invasão Nazista</h2>
                <img class="img-deportacao" src={Deportacao}></img>
                <p>Anos antes do início da Segunda Grande Guerra, em 1933, os nazistas assumiram o poder na Alemanha por meio da nomeação de Adolf Hitler como chanceler do país. A política e o ideal antissemita de Hitler não era agradável à família de Anne Frank. Além disso, a crise econômica da nação alemã apenas se expandia, prejudicando as condições de vida local.
                </p>
                <p>A partir disso, na tentativa de ter uma vida melhor, Frank e sua família fugiram para a Holanda, onde pensaram que estariam seguros. Entretanto, as tropas de Hitler invadiram o território holandês e começaram a impor diversas restrições aos judeus, como a obrigatoriedade da identificação da pessoa judia, utilizando uma estrela amarela em suas roupas, a proibição dos judeus a andar em bondes, visitar cinemas, teatros, diversos lugares. Ao passar dos dias, as restrições ficaram mais severas e a família Frank sentindo o desespero, se mudaram para um esconderijo em Prinsengrecht, onde ficaram aproximadamente dois anos até o dia em que foram descobertos e levados para os Campos de Concentração pelas tropas nazistas.
                </p>
            </Row>
,

        </Container>
    )
}