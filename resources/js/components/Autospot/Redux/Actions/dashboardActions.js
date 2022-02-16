import { types } from "../types/types";
//import Swal from "sweetalert2";

export const setDashboard = (key, target, value, i) => ({
    type: types.setDashboard,
    payload: {
        key,
        target,
        value,
        i,
    },
});

export const setProfileFields = (fields) => ({
    type: types.setProfileFields,
    payload: fields,
});

export const setOptionsForms = (key, fields) => ({
    type: types.setOptionsForms,
    payload: {
        key,
        fields,
    },
});

export const setModelBussinesData = (data) => ({
    type: types.setModelBussinesData,
    payload: data,
});

export const setValidations = (validations) => ({
    type: types.setValidations,
    payload: validations,
});

/* export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout());
        localStorage.clear();
    };
}; */
