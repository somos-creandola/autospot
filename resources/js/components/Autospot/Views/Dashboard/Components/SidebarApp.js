import React, { useState } from "react";
import { Sidebar } from "../Styles/StylesApp";
import {
    FaEnvelope,
    FaPlus,
    FaHome,
    FaCarAlt,
    FaHeart,
    FaTags,
    FaShoppingBag,
} from "react-icons/fa";
import { Routes } from "../../../Routers/Routes";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const SidebarApp = () => {
    const { name, isLogin, role_id } = useSelector((state) => state.auth);
    const [icons, seticon] = useState({
        FaPlus: <FaPlus />,
        FaHome: <FaHome />,
        FaCarAlt: <FaCarAlt />,
        FaHeart: <FaHeart />,
        FaTags: <FaTags />,
        FaShoppingBag: <FaShoppingBag />,
    });
    //role_id
    console.log("auth", name, role_id);
    return (
        <Sidebar className="col-md-2">
            <div className="m-0 p-3 mt-3 content-logo">
                <img src="/images/logo.png" alt="logo" width="100%" />
            </div>
            <div className="px-4 content-nav">
                <div className="btn-publish mt-5 d-flex align-items-center puls-btn">
                    <span className="pl-3 pb-1">
                        <FaPlus />
                    </span>{" "}
                    <button>Publicar</button>
                </div>
                <div className="navigation-app mt-3">
                    <ul>
                        {role_id ? (
                            Routes.map(({ to, label, icon, tag, rol }, i) => {
                                if (
                                    tag.includes("admin") &&
                                    rol.includes(parseInt(role_id))
                                )
                                    return (
                                        <li key={i} className="d-flex">
                                            <span className="pr-2">
                                                {icons[icon]}
                                            </span>
                                            <Link to={to}>{label}</Link>
                                        </li>
                                    );
                            })
                        ) : (
                            <li className="d-flex">Loading...</li>
                        )}
                    </ul>
                </div>
                <footer className="fixed-bottom mb-3 px-4">
                    <div> Visitar</div>
                    <div> Soporte</div>
                </footer>
            </div>
        </Sidebar>
    );
};
