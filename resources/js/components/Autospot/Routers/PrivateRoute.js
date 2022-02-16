import React from "react";
import { Redirect, Route } from "react-router-dom";
// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export const PrivateRoute = ({ component: Component, ...rest }) => {
    const autospot = window.localStorage.getItem("autospot")
        ? JSON.parse(window.localStorage.getItem("autospot"))
        : null;
    if (typeof autospot == "undefined") return <div>Cargando...</div>;

    return (
        <Route
            {...rest}
            render={({ location }) =>
                autospot?.user?.uid ? (
                    <Component />
                ) : (
                    <Redirect to={"/app/ingreso"} />
                )
            }
        />
    );
};
