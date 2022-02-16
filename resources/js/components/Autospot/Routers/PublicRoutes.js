import { Ingreso } from "../Generals/Ingreso";

export const publicRoutes = [
    {
        to: "/app/login",
        label: "Login",
        private: false,
        component: Ingreso,
    },
    {
        to: "/app/registro",
        label: "Página de registro",
        private: false,
        component: null,
    },
    {
        to: "/app/ingreso",
        label: "Página de ingreso",
        private: false,
        component: null,
    },
    {
        to: "/app/recuperar/contrasena",
        label: "Recuperar contraseña",
        private: false,
        component: null,
    },
    {
        to: "/app/clasificatorias",
        label: "Clasificatorias",
        private: true,
        component: null,
    },
    {
        to: "/app/amistosos",
        label: "Amistosos",
        private: true,
        component: null,
    },
];
