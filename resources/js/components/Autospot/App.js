import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { AuthButton, ProvideAuth } from "./Hooks/Auth/useProvideAuth";
import { SelectedRouter } from "./Routers/selectedRouter";
import { Switche } from "./Views/Switche";
import { store } from "./Redux/Store/Store";
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
    return (
        <Provider store={store}>
            <ProvideAuth>
                <Router>
                    <div>
                        {/* <AuthButton /> */}
                        {/* <SelectedRouter /> */}
                        <Switche />
                    </div>
                </Router>
            </ProvideAuth>
        </Provider>
    );
};
