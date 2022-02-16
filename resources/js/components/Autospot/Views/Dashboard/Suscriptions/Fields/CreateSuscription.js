export const CreateSuscription = {
    name: "Crear Suscripciones",
    endpoint: "/api/store/suscriptions",
    fields: [
        {
            key: "suscription",
            type: "text",
            value: "",
            validations: ["required"],
            placeholder: "Nombre de la suscripción",
            //render
            col: "6",
            //section
            section: "left",
        },
        {
            key: "price",
            type: "number",
            value: "",
            validations: ["required"],
            placeholder: "Valor",
            //render
            col: "6",
            //section
            section: "left",
        },
        {
            key: "description",
            type: "textarea",
            value: "",
            validations: ["required"],
            placeholder: "Descripción o caracteristicas",
            //render
            col: "12",
            //section
            section: "left",
        },
    ],
    tableShow: false,
};
