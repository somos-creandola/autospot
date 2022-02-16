import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Routes } from "../../../Routers/Routes";
import { Navigation, SearchContent } from "../Styles/Styles";

export const NavigationComponent = () => {
    const [text, setText] = useState("");
    const handleResetText = (e) => {
        e.preventDefault();
        setText("");
    };
    return (
        <Navigation className="container-fluid m-0">
            <div className="row p-4 justify-content-around">
                <div className="col-md-2">
                    <img src="/images/logo.png" alt="logo" width="100%" />
                </div>
                <div className="col-md-3">
                    <SearchContent className="search-content d-flex align-items-center h-100">
                        <p>
                            <FaSearch />
                        </p>
                        <input
                            type="text"
                            placeholder="Busca tu vehículo aquí"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        {text.length && (
                            <span className="close" onClick={handleResetText}>
                                X
                            </span>
                        )}
                    </SearchContent>
                </div>
                <div className="col-md-6">
                    <ul>
                        {Routes.map(({ to, label, tag, icon }, i) => {
                            if (tag.includes("web")) {
                                return (
                                    <li key={i}>
                                        <NavLink
                                            exact={true}
                                            activeClassName="is-active"
                                            to={to}
                                        >
                                            {label}
                                        </NavLink>
                                    </li>
                                );
                            }
                        })}
                        <li>
                            <NavLink
                                exact={true}
                                activeClassName="is-active"
                                to="/contacto"
                            >
                                Contacto
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </Navigation>
    );
};
