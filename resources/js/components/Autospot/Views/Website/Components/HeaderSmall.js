import React from "react";
import {
    CallToAction,
    Slider,
    SliderSmall,
    TitleSection,
} from "../Styles/Styles";
import { NavigationComponent } from "./Navigation";

export const HeaderSmall = () => {
    return (
        <>
            <header className="container-fluid p-0">
                <NavigationComponent />
                <SliderSmall className="container-fluid"></SliderSmall>
            </header>
        </>
    );
};
