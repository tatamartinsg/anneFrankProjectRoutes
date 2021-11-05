import React from "react";
import "./Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import AnneFooter from "../../assets/home/img/anneteste2.png"
import Insta from "../../assets/home/img/insta.png"
import Facebook from "../../assets/home/img/face.png"
import Github from "../../assets/home/img/github.png"

export default function Footer(){
    return (
        <div className="Footer-div">
            <footer className="bg-dark text-center text-lg-start text-white">
                <img className="img-footer" src={AnneFooter}></img>
                
                
                <ul className="ul-footer">
                    <li><a class="insta" target="_blank" href="https://www.instagram.com/annefrankhouse_official/"><img class="insta-img" src={Insta}></img>Instagram</a></li>
                    <li><a class="facebook" target="_blank" href="https://m.facebook.com/annefrankauthor"><img class="insta-img" src={Facebook}></img>Facebook</a></li>
                    <li><a class="github" target="_blank" href="https://github.com/tatamartinsg"><img class="insta-img" src={Github}></img>GitHub</a></li>
                </ul>
                <div className="text-center p-3" >
                    © 2021 Copyright
                </div>
            </footer>
        </div>
    );
}

