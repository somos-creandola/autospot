import React from "react";
import { ContentTable, Table } from "../Styles/StylesApp";
import { FaTrash, FaEdit } from "react-icons/fa";

const cars = [
    {
        id: 1,
        car: "Grand Turing Sport",
        marca: "Mazda",
        modelo: "Mazda 2",
        ano: "2015",
    },
    {
        id: 2,
        car: "Grand Turing Classic",
        marca: "Mazda",
        modelo: "Mazda 2",
        ano: "2013",
    },
    {
        id: 3,
        car: "Grand Vitara",
        marca: "Chevrolet",
        modelo: "Vitara camioneta",
        ano: "2013",
    },
    {
        id: 4,
        car: "Bora",
        marca: "Wolswaguen",
        modelo: "Bora Sport",
        ano: "2011",
    },
    { id: 5, car: "Clio", marca: "Renault", modelo: "Cupet", ano: "2008" },
    { id: 6, car: "Clio", marca: "Renault", modelo: "Cupet", ano: "2008" },
    {
        id: 7,
        car: "Sandero",
        marca: "Renault",
        modelo: "Classic",
        ano: "20010",
    },
    {
        id: 8,
        car: "Ford Fiesta",
        marca: "Ford",
        modelo: "Special",
        ano: "20016",
    },
    { id: 9, car: "Picanto", marca: "Kia", modelo: "Sport", ano: "20021" },
];

export const TableWorkflow = () => {
    return (
        <ContentTable className="col-md-9 table mt-5 mb-4">
            <Table className="table table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Carro</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Año</th>
                        <th>accion</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map(({ id, car, marca, modelo, ano }, i) => (
                        <tr key={i}>
                            <td>{id}</td>
                            <td>{car}</td>
                            <td>{marca}</td>
                            <td>{modelo}</td>
                            <td>{ano}</td>
                            <td className="text-center">
                                <FaEdit className="mr-2" />
                                <FaTrash />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </ContentTable>
    );
};
