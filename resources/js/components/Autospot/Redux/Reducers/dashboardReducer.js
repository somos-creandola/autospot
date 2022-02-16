import { CreateAttribute } from "../../Views/Dashboard/Attributes/Fields/CreateAtributte";
import { CreateBrands } from "../../Views/Dashboard/Brands/Fields/CreateBrands";
import { CreateCar } from "../../Views/Dashboard/Cars/Fields/CreateCar";
import { CreateSuscription } from "../../Views/Dashboard/Suscriptions/Fields/CreateSuscription";
import { CreateProfile } from "../../Views/Dashboard/Welcome/Fields/CreateProfile";
import { types } from "../types/types";

const initialState = {
    profile: {
        name: CreateProfile.name,
        fields: CreateProfile.fields,
        tableShow: CreateProfile.tableShow,
        endpoint: CreateProfile.endpoint,
    },
    car: {
        name: CreateCar.name,
        fields: CreateCar.fields,
        tableShow: CreateCar.tableShow,
        endpoint: CreateCar.endpoint,
    },
    brand: {
        name: CreateBrands.name,
        fields: CreateBrands.fields,
        tableShow: CreateBrands.tableShow,
        endpoint: CreateBrands.endpoint,
    },
    attribute: {
        name: CreateAttribute.name,
        fields: CreateAttribute.fields,
        tableShow: CreateAttribute.tableShow,
        endpoint: CreateAttribute.endpoint,
    },
    suscription: {
        name: CreateSuscription.name,
        fields: CreateSuscription.fields,
        tableShow: CreateSuscription.tableShow,
        endpoint: CreateSuscription.endpoint,
    },
    data: null,
    validations: {
        status: false,
        errors: [],
    },
};
export const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                key: action.payload.property,
            };
        case types.setDashboard:
            return {
                ...state,
                [action.payload.key]: {
                    ...state[action.payload.key],
                    fields: state[action.payload.key].fields.map((field) => {
                        if (field.key === action.payload.target)
                            field.value = action.payload.value;
                        return field;
                    }),
                },
            };
        case types.setOptionsForms:
            return {
                ...state,
                [action.payload.key]: {
                    ...state[action.payload.key],
                    fields: action.payload.fields,
                },
            };
        case types.setProfileFields:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    fields: [...action.payload],
                },
            };
        case types.setModelBussinesData:
            return {
                ...state,
                data: action.payload,
            };
        case types.setValidations:
            return {
                ...state,
                validations: action.payload,
            };

        default:
            return state;
    }
};
