import { types } from "../types/types";

const initialState = {
    isLogin: false,
};
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                id: action.payload.id,
                uid: action.payload.uid,
                name: action.payload.displayName,
                email: action.payload.email,
                photoURL: action.payload.photoURL,
                role_id: action.payload.role_id,
                isLogin: true,
            };
        case types.setAuth:
            return {
                ...state,
                roles: action.payload.roles,
                permissions: action.payload.permissions,
                permission_users: action.payload.permission_users,
            };
        case types.logout:
            return {};
        default:
            return state;
    }
};
