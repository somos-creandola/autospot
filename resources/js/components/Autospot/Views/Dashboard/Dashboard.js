import React, { useEffect, useState } from "react";
import { firebase, googleAuthProvider } from "../../Firebase/firebase-config";
import {
    ButtonStore,
    Content,
    ContentTable,
    LoadingStyles,
    Table,
} from "./Styles/StylesApp";
import Swal from "sweetalert2";
import { FaPowerOff, FaTrash } from "react-icons/fa";
import { SidebarApp } from "./Components/SidebarApp";

//imports components form dinamic function
import { useDispatch, useSelector } from "react-redux";
import { BuildForm } from "./Components/BuildForm";
import { initLogin, startLogout } from "../../Redux/Actions/authActions";
import { useHistory } from "react-router-dom";
import { TableWorkflow } from "./Components/TableWorkflow";
import { brandsData } from "./data/brands";
import { Logo } from "./Components/Logo";
import { HttpPost } from "../../Services/HttpPost";
import { HttptGet } from "../../Services/HttpGet";
import {
    setModelBussinesData,
    setOptionsForms,
} from "../../Redux/Actions/dashboardActions";

export const Dashboard = ({ experience }) => {
    const dispatch = useDispatch();
    const [firebaseData, setFirebaseData] = useState(null);
    const [checking, setChecking] = useState(true);
    let history = useHistory();
    const state = useSelector((state) => state.dashboard);
    const auth = useSelector((state) => state.auth);
    useEffect(() => {
        let asyncro = true;
        if (asyncro) {
            firebase.auth().onAuthStateChanged(async (user) => {
                if (user?.uid) {
                    const persistUser = JSON.parse(
                        localStorage.getItem("autospot")
                    );
                    if (!auth.isLogin && persistUser) {
                        setFirebaseData(persistUser.user);
                        initialPermision(persistUser.user);
                        getDataWorkflow();
                    }
                    setChecking(false);
                }
            });
        }
        return () => (asyncro = false);
    }, []);

    const getDataWorkflow = async () => {
        const fontData = await HttptGet("/api/model/bussines", "");
        if (!fontData.status || !Object.keys(fontData.data).length) return;
        let dataWithOptions = [];
        state[experience].fields.map((item) => {
            Object.keys(fontData.data).map(function (key, index) {
                if (item.key == key) {
                    item.options = fontData.data[key].map((ref) => {
                        return { label: ref.display_name, val: ref.id };
                    });
                }
            });
            dataWithOptions = [...dataWithOptions, item];
        });
        dispatch(setModelBussinesData(fontData.data));
        dispatch(setOptionsForms(experience, dataWithOptions));
    };

    const initialPermision = (data) => {
        const {
            uid,
            displayName,
            mail: email,
            photo_url: photoURL,
            role_id,
            id,
        } = data;
        dispatch(initLogin(uid, displayName, email, photoURL, role_id, id));
    };

    const exit = (e) => {
        e.preventDefault();
        dispatch(startLogout());
        history.push("/login");
    };

    const sendRequestBack = async (e) => {
        e.preventDefault();
        const endpoint = state[experience]?.endpoint;
        const finaldata = {};
        let paths = [];
        let allPaths = [];
        state[experience]?.fields.map((item) => {
            finaldata[item.key] = item.value;
            if (item?.singleImage) paths.push(item.key);
            if (item?.allImages) allPaths.push(item.key);
        });

        let file;
        const formData = new FormData();
        //map values current form
        Object.entries(finaldata).forEach(([key, value]) => {
            //validate if the field this in the values
            if (allPaths.includes(key)) {
                //get image of the input
                file = document.querySelector("[name='" + key + "']").files;
                finaldata["all_images"].forEach((file) =>
                    formData.append("all_images[]", file)
                );
            } else if (paths.includes(key)) {
                //get image of the input
                file = document.querySelector("[name='" + key + "']").files[0];
                //append image in form data
                formData.append(key, file);
                //change handle data
            } else {
                //Add the rest data
                formData.append(key, value);
            }
        });
        const resp = await HttpPost(endpoint, formData, false);
        if (resp?.status) {
            const { status, message, request } = resp;
            Swal.fire({
                icon: "success",
                title: "Muy bien...",
                text: message,
                footer: '<a href="">Tienes un error?</a>',
            });
        } else {
            const { status, message, request } = resp;
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: message ? message : "Error indeterminado",
                footer: '<a href="">Why do I have this issue?</a>',
            });
        }
    };

    if (checking) return <LoadingComponentApp />;

    return (
        <div className="container-fluid p-0">
            <div className="row m-0">
                <SidebarApp />
                <Content className="col-md-10">
                    <div className="container">
                        <div className="row">
                            <div className="title col-md-12 title m-0 mt-5">
                                <div className="row m-0 p-0 d-flex align-items-center">
                                    <div className="col-md-6">
                                        <h1>{state[experience].name}</h1>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-end">
                                        <img
                                            src={
                                                auth?.photoURL
                                                    ? auth?.photoURL
                                                    : firebaseData?.photo_url
                                            }
                                            width="7%"
                                            alt=""
                                            style={{
                                                borderRadius: "50%",
                                                margin: "0px 20px",
                                            }}
                                        />
                                        <span
                                            onClick={(e) => exit(e)}
                                            className="d-flex align-items-center"
                                            style={{
                                                fontSize: "20px",
                                                cursor: "pointer",
                                            }}
                                        >
                                            Salir{" "}
                                            <FaPowerOff className="ml-2" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mt-5">
                                <div className="buld-form">
                                    <form>
                                        <div className="row p-0">
                                            <BuildForm
                                                reduxkey={experience}
                                                experience={state[experience]}
                                                section="left"
                                            />
                                            <div className="col-md-12">
                                                <div className="row m-0 p-0">
                                                    <div className="col-md-3 p-0">
                                                        <ButtonStore
                                                            className="mt-4"
                                                            onClick={
                                                                sendRequestBack
                                                            }
                                                        >
                                                            Guardar
                                                        </ButtonStore>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-3 mt-5">
                                <BuildForm
                                    reduxkey={experience}
                                    experience={state[experience]}
                                    section="right"
                                />
                            </div>
                            {state[experience].tableShow && <TableWorkflow />}
                        </div>
                    </div>
                </Content>
            </div>
        </div>
    );
};

export const LoadingComponentApp = () => {
    return (
        <LoadingStyles className="d-flex align-items-center justify-content-center">
            <Logo width="20%" />
        </LoadingStyles>
    );
};
