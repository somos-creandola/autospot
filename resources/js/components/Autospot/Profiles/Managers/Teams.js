import React from "react";
const teams = [
    { id: 1, equipo: "Medellin" },
    { id: 2, equipo: "Nacional" },
    { id: 3, equipo: "Envigado" },
];
export const Teams = () => {
    return (
        <>
            <h1>Listado de equpos</h1> <hr />
            <ul>
                {teams.map(({ id, equipo }) => (
                    <li key={id}>{equipo}</li>
                ))}
            </ul>
        </>
    );
};
