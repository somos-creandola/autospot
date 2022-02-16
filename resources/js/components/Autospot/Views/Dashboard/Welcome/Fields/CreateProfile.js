const user = JSON.parse(localStorage.getItem("autospot"));
export const CreateProfile = {
    name: "Crear Perfil",
    endpoint: "api/store/profiles",
    fields: [
        {
            key: "photo_url",
            type: "image",
            value: "",
            validations: ["required"],
            placeholder: "Foto de perfil",
            //render
            col: "12",
            //section
            section: "left",
        },
        {
            key: "display_name",
            type: "text",
            value: user?.user?.displayName ? user?.user?.displayName : "",
            validations: ["required"],
            placeholder: "Nombres",
            //render
            col: "6",
            //section
            section: "right",
        },
        {
            key: "contact_cel",
            type: "text",
            value: "NO_CEL",
            validations: ["required"],
            placeholder: "Telefono",
            //render
            col: "6",
            //section
            section: "right",
        },
    ],
    tableShow: false,
};
