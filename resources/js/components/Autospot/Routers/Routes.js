import React from "react";
import { Ingreso } from "../Generals/Ingreso";
import { Test } from "../Generals/Test";
import { Teams } from "../Profiles/Managers/Teams";
import { Dashboard } from "../Views/Dashboard/Dashboard";
import { Welcome } from "../Views/Dashboard/Welcome";
import { Home } from "../Views/Website/Home";

export const Routes = [
    //website
    {
        to: "/",
        label: "Inicio",
        isPrivate: false,
        component: Home,
        tag: ["web"],
        rol: [],
        icon: "FaHome",
    },
    {
        to: "/publicacion/:id",
        label: "Inicio",
        isPrivate: false,
        component: () => <Home space="publish" slider="sliderSmall" />,
        tag: [],
        rol: [],
        icon: "FaHome",
    },
    {
        to: "/autospot/bienvenida",
        label: "Bienvenida",
        isPrivate: true,
        component: () => <Welcome />,
        tag: ["admin", "user"],
        rol: [],
        icon: "FaPlus",
    },
    {
        to: "/login",
        label: "Login",
        isPrivate: false,
        component: Ingreso,
        tag: ["user"],
        rol: [],
        icon: null,
    },
    {
        to: "/app/registro",
        label: "Página de registro",
        isPrivate: false,
        component: Test,
        tag: ["user"],
        rol: [],
        icon: null,
    },
    {
        to: "/app/ingreso",
        label: "Página de ingreso",
        isPrivate: false,
        component: Ingreso,
        tag: ["user"],
        rol: [],
        icon: null,
    },
    {
        to: "/autospot/carros",
        label: "Carros",
        isPrivate: true,
        component: () => <Dashboard experience="car" />,
        tag: ["admin"],
        rol: [0, 1, 2],
        icon: "FaCarAlt",
    },
    {
        to: "/autospot/atributos",
        label: "Atributo",
        isPrivate: true,
        component: () => <Dashboard experience="attribute" />,
        tag: ["admin"],
        rol: [0],
        icon: "FaHeart",
    },
    {
        to: "/autospot/marcas",
        label: "Marcas",
        isPrivate: true,
        component: () => <Dashboard experience="brand" />,
        tag: ["admin"],
        rol: [0],
        icon: "FaTags",
    },
    {
        to: "/autospot/suscripciones",
        label: "Suscripciones",
        isPrivate: true,
        component: () => <Dashboard experience="suscription" />,
        tag: ["admin"],
        rol: [0],
        icon: "FaShoppingBag",
    },
];
