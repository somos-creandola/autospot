export const CreateCar = {
    name: "Crear Vehículo",
    endpoint: "/api/store/vehicle",
    fields: [
        {
            key: "precio",
            type: "number",
            value: "",
            validations: ["required"],
            placeholder: "Precio",
            //render
            col: "6",
            //section
            section: "left",
        },
        {
            key: "provincia",
            type: "dropdown",
            value: "",
            options: [],
            validations: ["required"],
            placeholder: "Seleccione una provincia",
            //render
            col: "6",
            //section
            section: "left",
        },
        {
            key: "ciudad",
            type: "dropdown",
            value: "",
            options: [
                { label: "Medellin", val: 1 },
                { label: "Cali", val: 2 },
                { label: "Bogota", val: 3 },
            ],
            validations: ["required"],
            placeholder: "Seleccione una ciudad",
            //render
            col: "6",
            //section
            section: "left",
        },
        {
            key: "numero_contacto",
            type: "text",
            value: "",
            validations: ["required"],
            placeholder: "Número de contacto",
            //render
            col: "6",
            //section
            section: "left",
        },
        {
            key: "brands",
            type: "dropdown",
            value: "",
            options: [],
            validations: ["required"],
            placeholder: "Seleccione una marca",
            //render
            col: "12",
            //section
            section: "right",
        },
        {
            key: "modelo",
            type: "dropdown",
            value: "",
            options: [],
            validations: ["required"],
            placeholder: "Seleccione una modelo",
            //render
            col: "12",
            //section
            section: "right",
        },
        {
            key: "ano",
            type: "dropdown",
            value: "",
            options: [],
            validations: ["required"],
            placeholder: "Seleccione una año",
            //render
            col: "12",
            //section
            section: "right",
        },
        {
            key: "destacado",
            type: "checkbox",
            value: false,
            validations: ["required"],
            placeholder: "Destacado",
            //render
            col: "12",
            //section
            section: "right",
        },
        {
            key: "descripcion",
            type: "textarea",
            value: "",
            validations: ["required"],
            placeholder: "Descripción",
            //render
            col: "12",
            columns: "1",
            rows: "3",
            //section
            section: "left",
        },
        {
            key: "imagen",
            type: "file",
            value: [],
            validations: ["required"],
            singleImage: true,
            placeholder: "Imagen de portada",
            //render
            col: "4",
            //section
            section: "left",
        },
        {
            key: "all_images",
            type: "multiple",
            value: [],
            validations: [],
            allImages: true,
            placeholder: "Agregar imegenes adicionales",
            //render
            col: "4",
            //section
            section: "left",
        },
    ],
    tableShow: true,
};
