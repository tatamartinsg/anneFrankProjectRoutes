//home
import diarioAnne2 from "../assets/home/img/diarioanne2.jpg";
import anne2 from "../assets/home/img/anne2.jpg";
import diarioAnne from "../assets/home/img/diarioAnne.jpg";

//Museum
import anne from "../assets/museum/anne.jpg";
import casaDeAnneFrank from "../assets/museum/casa-de-anne-frank.jpg"
import museu from "../assets/museum/museu.jpg"

//Campo de concentração
import cc1 from "../assets/concentration/cc_1.jpg";
import cc2 from "../assets/concentration/cc_2.png";
import cc3 from "../assets/concentration/cc_3.jpg";

let slide1Home, slide1ConCamp, slide1Museum, slide2Home, slide2ConCamp, slide2Museum, slide3Home, slide3ConCamp, slide3Museum;

const ImagesHome = [
    slide1Home = {
        src: diarioAnne2,
        alt: "First slide",
    },
    slide2Home = {
        src: anne2,
        alt: "Second slide",
    },
    slide3Home = {
        src: diarioAnne,
        alt: "Third slide",
    },
]

const ImagesMuseum = [
    slide1Museum = {
        src: anne,
        alt: "First slide",
    },
    slide2Museum = {
        src: casaDeAnneFrank,
        alt: "Second slide",
    },
    slide3Museum = {
        src: museu,
        alt: "Third slide",
    },
]

const ImagesConCamp = [
    slide1ConCamp = {
        src: cc1,
        alt: "First slide",
    },
    slide2ConCamp = {
        src: cc2,
        alt: "Second slide",
    },
    slide3ConCamp = {
        src: cc3,
        alt: "Third slide",
    },
]

export {ImagesHome, ImagesMuseum, ImagesConCamp};
