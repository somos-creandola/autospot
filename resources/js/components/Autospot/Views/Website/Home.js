import React, { useState } from "react";
import { useEffect } from "react";
import { Content } from "./Components/Content";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { HeaderSmall } from "./Components/HeaderSmall";
import { Publish } from "./Components/Publish";
import GlobalStyle from "./Styles/GlobalStyle";
import { BodyWeb } from "./Styles/Styles";

export const Home = ({ slider = "sliderBig", space = "home" }) => {
    const [components, setComponents] = useState({
        sliderBig: <Header />,
        sliderSmall: <HeaderSmall />,
        home: <Content />,
        publish: <Publish />,
    });
    useEffect(() => {
        console.log(slider);
    }, []);

    return (
        <>
            <GlobalStyle />
            <BodyWeb className="container-fluid m-0 p-0">
                {components[slider]}
                {components[space]}
                <Footer />
            </BodyWeb>
        </>
    );
};
