import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "../Routers/PrivateRoute";
import { Routes } from "../Routers/Routes";
export const Switche = () => {
    return (
        <Switch>
            {Routes.map(({ to, component, isPrivate }, i) => {
                if (isPrivate) {
                    return (
                        <PrivateRoute
                            exact
                            path={to}
                            key={i}
                            component={component}
                        />
                    );
                } else {
                    return (
                        <Route exact path={to} component={component} key={i} />
                    );
                }
            })}
        </Switch>
    );
};
