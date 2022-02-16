import React from "react";
import { CallToAction, Slider, TitleSection } from "../Styles/Styles";
import { NavigationComponent } from "./Navigation";

export const Header = () => {
    return (
        <>
            <header className="container-fluid p-0">
                <NavigationComponent />
                <Slider className="container-fluid">
                    <TitleSection className="row justify-content-center align-items-center">
                        <div className="col-md-6">
                            <img
                                src="/images/plataforma-1.png"
                                alt="title"
                                width="100%"
                            />
                            <div className="d-flex justify-content-center mt-4">
                                <CallToAction>Vende Aquí</CallToAction>
                            </div>
                        </div>
                    </TitleSection>
                </Slider>
            </header>
        </>
    );
};
