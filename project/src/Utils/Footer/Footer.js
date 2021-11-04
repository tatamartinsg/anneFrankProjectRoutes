import React from "react";
import "./Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer(){
    return (
        <div className="Footer-div">
            <footer className="bg-dark text-center text-lg-start text-white">
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2021 Copyright:
                    &nbsp;<a className="text-white" href="/">GitHub</a>
                </div>
            </footer>
        </div>
    );
}

