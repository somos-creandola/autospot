import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../../Firebase/firebase-config";
import Swal from "sweetalert2";

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await dispatch(login(user.uid, user.displayName, user.email));
            })
            .catch((e) => {
                Swal.fire("Error", e.message, "error");
            });
    };
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name });
                dispatch(login(user.uid, user.displayName, user.email));
            })
            .catch((e) => {
                Swal.fire("Error", e.message, "error");
            });
    };
};

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase
            .auth()
            .signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName, user.email));
            });
    };
};

export const saveUserDataInBackend = ({ rol, bussine, ficha_personal }) => {
    return async (dispatch, getState) => {
        const { uid, name: displayName, email } = getState().auth;
        const userBox = {
            uid,
            displayName,
            email,
            rol,
            bussine,
            ficha_personal,
        };
        try {
            const res = await fetch(`/api/user/save`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json; charset=utf-8",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Request-Headers": "*",
                    "Access-Control-Request-Method": "*",
                },
                body: JSON.stringify(userBox),
            });
            const data = await res.json();
            if (!data.status) return false;
            localStorage.clear();
            await dispatch(getUserData(email));
        } catch (error) {
            return error;
        }
    };
};

export const login = (uid, displayName, email) => ({
    type: types.login,
    payload: {
        uid,
        displayName,
        email,
    },
});

export const initLogin = (
    uid,
    displayName,
    email,
    photoURL,
    role_id = 2,
    id = null
) => ({
    type: types.login,
    payload: {
        uid,
        displayName,
        email,
        photoURL,
        role_id,
        id,
    },
});

export const setDataUser = ({
    role,
    bussine,
    nit,
    ficha_personal,
    bussine_id,
    roles,
    permissions,
    permission_users,
}) => ({
    type: types.userSetData,
    payload: {
        role,
        bussine,
        nit,
        ficha_personal,
        bussine_id,
        roles,
        permissions,
        permission_users,
    },
});

export const setAuth = ({ roles, permissions, permission_users }) => ({
    type: types.setAuth,
    payload: {
        roles,
        permissions,
        permission_users,
    },
});

export const getUserData = (email) => {
    return async (dispatch) => {
        const data = {}; //await sendRequestPost({ email }, `/api/user/data`);
        if (!data.status) return false;
        console.log("****************** establecer data de usuario", data);
        const userData = {
            role: data.user.role,
            bussine_id: data.company_id,
            bussine: data.company,
            installs: data.installs,
            brands: data.brands,
            only_brands: data.only_brands,
            categoria_maquinas: data.categoria_maquinas,
            categoria_repuestos: data.categoria_repuestos,
            type_machines: data.type_machines,
            sections: data.sections,
            roles: data.roles,
            permissions: data.permissions,
            permission_users: data.permission_users,
            justifications: data.justifications,
            nit: data.nit,
            ficha_personal: data.user.ficha_personal,
            users: data.users,
            suscriptions: data.suscriptions,
            activos: data.activos,
            tanqueo: data.tanqueo,
            replacements_erp: data.replacements_erp,
        };
        localStorage.setItem("usuario", JSON.stringify(userData));
        await dispatch(setAuth(userData));
        await dispatch(setDataUser(userData));
    };
};

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout());
        localStorage.clear();
    };
};

export const logout = () => ({
    type: types.logout,
});
