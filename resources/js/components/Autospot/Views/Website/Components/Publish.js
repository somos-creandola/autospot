import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
    ButtonCall,
    ButtonWhatsapp,
    Container,
    ContentBody,
    ImgPublis,
} from "../Styles/Styles";
import { SidebarWebsite } from "./SidebarWebsite";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ReactLoading from "react-loading";
import "../Styles/publish.css";
import { publish } from "../../Dashboard/data/publish";

const sliders = [
    {
        src: "https://autospot.nyc3.digitaloceanspaces.com/uploads/Eeo2VT3mWzL4mUViDTPBgK6mOmp1/Eeo2VT3mWzL4mUViDTPBgK6mOmp1_116_GALERY_5.jpeg",
        txt: "Name description",
    },
    {
        src: "https://autospot.nyc3.digitaloceanspaces.com/uploads/Eeo2VT3mWzL4mUViDTPBgK6mOmp1/Eeo2VT3mWzL4mUViDTPBgK6mOmp1_116_GALERY_5.jpeg",
        txt: "Name description",
    },
    {
        src: "https://autospot.nyc3.digitaloceanspaces.com/uploads/Eeo2VT3mWzL4mUViDTPBgK6mOmp1/Eeo2VT3mWzL4mUViDTPBgK6mOmp1_116_GALERY_5.jpeg",
        txt: "Name description",
    },
];

const characteristics = {
    kilometrage: 25000,
    marca: "Ford",
    modelo: "Explorer",
    motor: "3,700 cc flex fuel",
    "Aire acondicionado": "si",
    color: "Rojo",
};

const objetcExample = {
    id: "72",
    title: "Explorer Ford - 2016",
    description:
        "Full (climatizador, cuero, mandos al volante equipamiento eléctrico) en optimas condiciones un solo dueño.",
    price: 42900,
    city: {
        id: "178",
        displayName: "Quito",
        state: {
            id: "17",
            displayName: "Pichincha",
            __typename: "State",
        },
        __typename: "City",
    },
    vehicle: {
        year: 2016,
        model: {
            id: "19",
            brand: {
                id: "7",
                __typename: "Brand",
            },
            __typename: "BrandModel",
        },
        details: [
            {
                field: {
                    id: "1",
                    displayName: "Kilometraje",
                    __typename: "VehicleField",
                },
                value: "89.000",
                __typename: "VehicleDetail",
            },
            {
                field: {
                    id: "2",
                    displayName: "Marca",
                    __typename: "VehicleField",
                },
                value: "Ford",
                __typename: "VehicleDetail",
            },
            {
                field: {
                    id: "3",
                    displayName: "Modelo",
                    __typename: "VehicleField",
                },
                value: "Explorer",
                __typename: "VehicleDetail",
            },
            {
                field: {
                    id: "4",
                    displayName: "Año",
                    __typename: "VehicleField",
                },
                value: "2016",
                __typename: "VehicleDetail",
            },
            {
                field: {
                    id: "5",
                    displayName: "Color",
                    __typename: "VehicleField",
                },
                value: "Blanco",
                __typename: "VehicleDetail",
            },
            {
                field: {
                    id: "6",
                    displayName: "Motor",
                    __typename: "VehicleField",
                },
                value: "3,700 cc flex fuel",
                __typename: "VehicleDetail",
            },
            {
                field: {
                    id: "7",
                    displayName: "Aire acondicionado",
                    __typename: "VehicleField",
                },
                value: "SI",
                __typename: "VehicleDetail",
            },
            {
                field: {
                    id: "8",
                    displayName: "Blindado",
                    __typename: "VehicleField",
                },
                value: "NO",
                __typename: "VehicleDetail",
            },
            {
                field: {
                    id: "9",
                    displayName: "Negociable",
                    __typename: "VehicleField",
                },
                value: "SI",
                __typename: "VehicleDetail",
            },
            {
                field: {
                    id: "10",
                    displayName: "Ubicacion",
                    __typename: "VehicleField",
                },
                value: "Quito",
                __typename: "VehicleDetail",
            },
            {
                field: {
                    id: "11",
                    displayName: "Transmisión",
                    __typename: "VehicleField",
                },
                value: "Automática 4x4",
                __typename: "VehicleDetail",
            },
            {
                field: {
                    id: "12",
                    displayName: "Tipo de combustible",
                    __typename: "VehicleField",
                },
                value: "Gasolina",
                __typename: "VehicleDetail",
            },
        ],
        photos: [
            {
                url: "https://autospot.nyc3.digitaloceanspaces.com/uploads/Eeo2VT3mWzL4mUViDTPBgK6mOmp1/Eeo2VT3mWzL4mUViDTPBgK6mOmp1_116_COVER_0.jpeg",
                __typename: "VehiclePhoto",
            },
            {
                url: "https://autospot.nyc3.digitaloceanspaces.com/uploads/Eeo2VT3mWzL4mUViDTPBgK6mOmp1/Eeo2VT3mWzL4mUViDTPBgK6mOmp1_116_GALERY_1.jpeg",
                __typename: "VehiclePhoto",
            },
            {
                url: "https://autospot.nyc3.digitaloceanspaces.com/uploads/Eeo2VT3mWzL4mUViDTPBgK6mOmp1/Eeo2VT3mWzL4mUViDTPBgK6mOmp1_116_GALERY_2.jpeg",
                __typename: "VehiclePhoto",
            },
            {
                url: "https://autospot.nyc3.digitaloceanspaces.com/uploads/Eeo2VT3mWzL4mUViDTPBgK6mOmp1/Eeo2VT3mWzL4mUViDTPBgK6mOmp1_116_GALERY_3.jpeg",
                __typename: "VehiclePhoto",
            },
            {
                url: "https://autospot.nyc3.digitaloceanspaces.com/uploads/Eeo2VT3mWzL4mUViDTPBgK6mOmp1/Eeo2VT3mWzL4mUViDTPBgK6mOmp1_116_GALERY_4.jpeg",
                __typename: "VehiclePhoto",
            },
            {
                url: "https://autospot.nyc3.digitaloceanspaces.com/uploads/Eeo2VT3mWzL4mUViDTPBgK6mOmp1/Eeo2VT3mWzL4mUViDTPBgK6mOmp1_116_GALERY_5.jpeg",
                __typename: "VehiclePhoto",
            },
            {
                url: "https://autospot.nyc3.digitaloceanspaces.com/uploads/Eeo2VT3mWzL4mUViDTPBgK6mOmp1/Eeo2VT3mWzL4mUViDTPBgK6mOmp1_116_GALERY_6.jpeg",
                __typename: "VehiclePhoto",
            },
            {
                url: "https://autospot.nyc3.digitaloceanspaces.com/uploads/Eeo2VT3mWzL4mUViDTPBgK6mOmp1/Eeo2VT3mWzL4mUViDTPBgK6mOmp1_116_GALERY_7.jpeg",
                __typename: "VehiclePhoto",
            },
            {
                url: "https://autospot.nyc3.digitaloceanspaces.com/uploads/Eeo2VT3mWzL4mUViDTPBgK6mOmp1/Eeo2VT3mWzL4mUViDTPBgK6mOmp1_116_GALERY_8.jpeg",
                __typename: "VehiclePhoto",
            },
            {
                url: "https://autospot.nyc3.digitaloceanspaces.com/uploads/Eeo2VT3mWzL4mUViDTPBgK6mOmp1/Eeo2VT3mWzL4mUViDTPBgK6mOmp1_116_GALERY_9.jpeg",
                __typename: "VehiclePhoto",
            },
        ],
        __typename: "Vehicle",
    },
    contactCel: "0993956452",
    seller: {
        displayName: "Autospot",
        __typename: "User",
    },
    __typename: "Post",
};

export const Publish = () => {
    const [car, setcar] = useState({});
    const { id } = useParams();
    const histoty = useHistory();
    const carsp = publish;
    useEffect(() => {
        const searchCar = carsp.find((ref) => ref.id == id);
        //console.log("id is: ****", searchCar, id, carsp);
    }, []);

    return (
        <Container className="container-fluid">
            <ContentBody className="col-md-12">
                <div className="row">
                    <div className="col-md-7">
                        <Carousel>
                            {sliders.map(({ src, txt }, i) => (
                                <div key={i}>
                                    <ImgPublis
                                        src={src}
                                        alt="slider"
                                        width="100%"
                                    />
                                    {/*  <p className="legend">Legend 1</p> */}
                                </div>
                            ))}
                        </Carousel>
                        {/*  <ReactLoading
                            type={"bars"}
                            color={"#000"}
                            height={200}
                            width={200}
                        /> */}
                    </div>
                    <div className="col-md-5 px-5">
                        <div className="titlePublish">
                            <h1>Explorer Ford - 2016</h1>
                            <h2>Quito - Pichincha</h2>
                        </div>
                        <div className="characteristics">
                            <div className="mb-4 mt-3">
                                <ButtonCall
                                    href="tel:0993956452"
                                    className="mr-2"
                                >
                                    Llamar
                                </ButtonCall>
                                <ButtonWhatsapp
                                    href="https://api.whatsapp.com/send?phone=+5930993956452&text=Hola,%20estoy%20interesado%20en%20Explorer%20Ford%20-%202016"
                                    target="_blank"
                                >
                                    Whatsapp
                                </ButtonWhatsapp>
                            </div>
                            <div>
                                <h3>$42.900</h3>
                            </div>
                            <div>
                                <p>
                                    Full (climatizador, cuero, mandos al volante
                                    equipamiento eléctrico) en optimas
                                    condiciones un solo dueño.
                                </p>
                            </div>
                            <div>
                                <h3>Caracteristicas</h3>
                                <table className="table table-striped table-hover">
                                    <tbody>
                                        {Object.keys(characteristics).map(
                                            function (key, index) {
                                                let color = "white";
                                                if (index % 2)
                                                    color = "#afb0b0";
                                                return (
                                                    <tr
                                                        key={key}
                                                        className="font-weight-bold"
                                                        style={{
                                                            background: color,
                                                            fontSize: "18px",
                                                        }}
                                                    >
                                                        <td>{key}</td>
                                                        <td>
                                                            {
                                                                characteristics[
                                                                    key
                                                                ]
                                                            }
                                                        </td>
                                                    </tr>
                                                );
                                            }
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentBody>
        </Container>
    );
};
