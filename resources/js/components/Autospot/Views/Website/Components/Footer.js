import React from "react";
import { FooterElement } from "../Styles/Styles";

export const Footer = () => {
    return (
        <FooterElement className="container-fluid">
            <div className="row m-0">
                <div className="col-md-5">
                    <h3 className="title is-4">Enlaces</h3>
                    <div>
                        <ul className="d-flex ">
                            <li className="mr-4">Preguntas frecuentes</li>
                            <a href="/terms">
                                <li>Términos y condiciones</li>
                            </a>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <h3 className="title">Síguenos</h3>
                    <div className="">
                        <a
                            href="https://www.instagram.com/autospot.ec/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="/images/icon-instagram.png"
                                width="8%"
                                style={{ marginRight: "50px" }}
                            />
                        </a>
                        <a
                            href="https://web.facebook.com/AutoSpot-EC-104269391987724"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src="/images/icon-facebook.png" width="8%" />
                        </a>
                    </div>
                </div>
            </div>
        </FooterElement>
    );
};
