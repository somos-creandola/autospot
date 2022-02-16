export const CreateBrands = {
    name: "Crear Marcas",
    endpoint: "/api/store/brands",
    fields: [
        {
            key: "display_name",
            type: "text",
            value: "",
            validations: ["required"],
            placeholder: "Nombre o Marca",
            //render
            col: "6",
            //section
            section: "left",
        },
    ],
    tableShow: false,
};
