import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../Hooks/Auth/useProvideAuth";
import { LoginContent } from "../Views/Website/Styles/Styles";
import { FaEnvelope } from "react-icons/fa";
import { firebase, googleAuthProvider } from "../Firebase/firebase-config";
import { useDispatch, useSelector } from "react-redux";
import { initLogin } from "../Redux/Actions/authActions";
import "./GoogleBtnCss.css";
import { HttpPost } from "../Services/HttpPost";
import { setProfileFields } from "../Redux/Actions/dashboardActions";
import { setLocalStorage } from "../Helpers/AuthHelpers";

export const Ingreso = () => {
    const state = useSelector((state) => state.dashboard);
    const dispatch = useDispatch();
    let history = useHistory();
    let location = useLocation();
    const [firebaseData, setFirebaseData] = useState(null);
    let auth = useAuth();
    let { from } = location.state || {
        from: { pathname: "/autospot/bienvenida" },
    };

    useEffect(() => {
        validateExistUser();
    }, [firebaseData]);

    const validateExistUser = async () => {
        //validamos si ya se obtuvo la información desde firebase
        if (!firebaseData) return;
        //desestructuramos la data que viene del objecto de firebase
        const { email: mail, displayName, uid, photoURL } = firebaseData;
        //consultamos al backend si el usuario existe sino lo creamos en el back
        const resp = await HttpPost(`/api/user/search/`, firebaseData);
        //obtenemos y desectructuramos la respuesta del backend
        const { status, response, message } = resp;
        //vaidamos si el estatus del backend es positivo o existen errores
        if (!status) {
            //En este punto hay un error en el backend lo expresamos
            alert(JSON.stringify(message));
            return;
        }
        //si todo el back paso bien y tenemos el response los desectructuramos para obtener la data
        const { id, role_id, contact_cel } = response;
        let redirect = "/autospot/carros";
        if (contact_cel == "NO_CEL") {
            let newFields = [];
            state["profile"].fields.map((field) => {
                if (response[field.key]) field.value = response[field.key];
                newFields.push(field);
            });
            dispatch(setProfileFields(newFields));
            redirect = "/autospot/bienvenida";
        }
        dispatch(initLogin(uid, displayName, mail, photoURL, role_id, id));
        setLocalStorage(uid, displayName, mail, photoURL, role_id, id);
        history.push(redirect);
    };

    let login = () => {
        firebase
            .auth()
            .signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                setFirebaseData(user);
            })
            .catch(console.log);
    };

    return (
        <LoginContent className="d-flex align-items-center justify-content-center">
            <div className="form-elements">
                <h1 className="text-center text-light">Login</h1>
                {/* <div className="emai-div d-flex align-items-center">
                    <span className="pl-2">
                        <FaEnvelope />
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Correo electronico"
                    />
                </div> */}
                {/* <button onClick={login}>Ingresar</button> */}
                <div
                    className="google-btn animate__animated animate__fadeIn animate__faster"
                    onClick={login}
                >
                    <div className="google-icon-wrapper">
                        <img
                            className="google-icon"
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                            alt="google button"
                        />
                    </div>
                    <p className="btn-text">
                        <b>Ingresa con Google</b>
                    </p>
                </div>
                <div className="text-center">
                    <Link to="/">Sitio Web</Link>
                </div>
            </div>
        </LoginContent>
    );
};
