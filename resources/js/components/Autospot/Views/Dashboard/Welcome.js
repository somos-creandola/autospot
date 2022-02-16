import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { firebase, googleAuthProvider } from "../../Firebase/firebase-config";
import { useHistory } from "react-router-dom";
import { initLogin, startLogout } from "../../Redux/Actions/authActions";
import { BuildForm } from "./Components/BuildForm";
import { Logo } from "./Components/Logo";
import { ButtonStore, WelcomeBtn, WelcomeContent } from "./Styles/StylesApp";
import { LoadingComponentApp } from "./Dashboard";

export const Welcome = ({ experience = "profile" }) => {
    const dispatch = useDispatch;
    const state = useSelector((state) => state.dashboard);
    const auth = useSelector((state) => state.auth);
    const [firebaseData, setFirebaseData] = useState({
        uid: "",
        displayName: "",
        email: "",
    });
    const [checking, setChecking] = useState(true);
    let history = useHistory();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {
                console.log(user.uid, user.displayName);
                setFirebaseData(user);
                const field = state["profile"].fields.find(
                    (ref) => ref.key == "contact_cel"
                );
                if (field && field.value !== "NO_CEL" && field.value !== "") {
                    history.push("/autospot/carros");
                }
            }
        });
        setChecking(false);
    }, []);

    if (checking) return <LoadingComponentApp />;

    return (
        <WelcomeContent className="container-fluid d-flex align-items-center">
            <div className="content row justify-content-center">
                <div className="col-md-8">
                    <div className="">
                        <Logo width="20%" />
                    </div>
                    <div className="mt-5">
                        <h1 className="mb-2">
                            Bienvenido,{" "}
                            <strong style={{ textTransform: "capitalize" }}>
                                {firebaseData.displayName
                                    .split(" ")
                                    .slice(0, 1)
                                    .join(" ")}
                            </strong>
                        </h1>
                    </div>
                    <div className="mb-4">
                        <div className="row p-0">
                            <div className="col-md-10">
                                <p>
                                    lorem insup dolor amro lorem insup dolor
                                    amro lorem insup dolor amrolorem insu insup
                                    lorem insup insup dolor amrolorem insup
                                    dolor amro lorem insup dolor amro lorem
                                    insup dolor amrolorem insup{" "}
                                    <strong>
                                        dolor amro lorem insup dolor amro lorem
                                        insup{" "}
                                    </strong>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row p-0">
                        <div className="col-md-2 p-0">
                            <BuildForm
                                reduxkey={experience}
                                experience={state[experience]}
                                section="left"
                            />
                        </div>
                        <div className="col-md-8 p-0">
                            <div className="row m-0 p-0">
                                <BuildForm
                                    reduxkey={experience}
                                    experience={state[experience]}
                                    section="right"
                                />
                                <div className="col-md-6 p-0 d-flex align-items-center justify-content-center">
                                    <WelcomeBtn
                                        onClick={() =>
                                            history.push("/autospot/carros")
                                        }
                                        className="mt-4 py-1 font-weight-bold"
                                    >
                                        ¡Comenzar!
                                    </WelcomeBtn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WelcomeContent>
    );
};
