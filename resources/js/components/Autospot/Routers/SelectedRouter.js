import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Hooks/Auth/useProvideAuth";
import { Routes } from "./Routes";

export const SelectedRouter = () => {
    let auth = useAuth();
    let { from } = location.state || { from: { pathname: "/" } };
    let tipo_perfil = auth?.user?.perfil ? auth?.user?.perfil : 0;

    return (
        <div>
            <>
                <ul>
                    {Routes.length > 0 ? (
                        Routes.map(({ to, label }, i) => (
                            <li key={i}>
                                <Link to={to}>{label}</Link>
                            </li>
                        ))
                    ) : (
                        <li>No hay rutas disponibles</li>
                    )}
                </ul>
            </>
        </div>
    );
};
