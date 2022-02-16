import React, { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";

/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */
const authContext = createContext();
export const ProvideAuth = ({ children }) => {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};
export const useAuth = () => {
    return useContext(authContext);
};

const fakeAuth = {
    isAuthenticated: false,
    signin(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    },
};

export const useProvideAuth = () => {
    const [user, setUser] = useState(null);

    const signin = (cb) => {
        return fakeAuth.signin(() => {
            setUser({
                username: "Edwin Caicedo",
                uid: "ajshdkhgj",
                perfil: 2,
                nombrePerfil: "Manager",
            });
            cb();
        });
    };

    const signout = (cb) => {
        return fakeAuth.signout(() => {
            setUser(null);
            cb();
        });
    };

    return {
        user,
        signin,
        signout,
    };
};

export const AuthButton = () => {
    let history = useHistory();
    let auth = useAuth();

    return auth.user ? (
        <p>
            Bienvenidos!{" "}
            <button
                onClick={() => {
                    auth.signout(() => history.push("/app"));
                }}
            >
                Salir
            </button>
        </p>
    ) : (
        <p>No autenticado!</p>
    );
};
