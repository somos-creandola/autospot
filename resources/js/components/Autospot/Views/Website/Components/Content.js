import React from "react";
import { useHistory } from "react-router-dom";
import { CartList } from "../../Dashboard/Cars/CartList";
import { publish } from "../../Dashboard/data/publish";
import { Container, ContentBody } from "../Styles/Styles";
import { SidebarWebsite } from "./SidebarWebsite";

export const Content = () => {
    const histoty = useHistory();
    const carsp = publish;
    return (
        <Container className="container-fluid">
            <div className="row m-0">
                <div className="col-md-2 p-0">
                    <SidebarWebsite />
                </div>
                <ContentBody className="col-md-10">
                    <CartList carsp={carsp} isFeatured />
                </ContentBody>
            </div>
        </Container>
    );
};
