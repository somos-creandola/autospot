export const CreateAttribute = {
    name: "Crear Atributos",
    endpoint: "/api/store/attributes",
    fields: [
        {
            key: "display_name",
            type: "text",
            value: "",
            validations: ["required"],
            placeholder: "Nombre del atributo",
            //render
            col: "6",
            //section
            section: "left",
        },
    ],
    tableShow: false,
};
