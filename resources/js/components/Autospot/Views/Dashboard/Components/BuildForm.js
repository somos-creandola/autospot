import React from "react";
import { FaCamera } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setDashboard } from "../../../Redux/Actions/dashboardActions";
import { FileContentStyle } from "../Styles/StylesApp";

export const BuildForm = ({ experience, section: spaceRender, reduxkey }) => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.auth);

    const getBase64 = (file, cb) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function () {
            cb(reader.result);
        };
        reader.onerror = function (error) {
            console.log("Error: ", error);
        };
    };
    return (
        <>
            {experience.fields.map(
                (
                    {
                        key,
                        type,
                        col,
                        placeholder,
                        value,
                        columns,
                        rows,
                        options,
                        section,
                    },
                    i
                ) => {
                    if (spaceRender == section)
                        switch (type) {
                            case "text":
                            case "number":
                            case "date":
                                return (
                                    <div
                                        key={i}
                                        className={`col-md-${col} my-2`}
                                    >
                                        <label>{placeholder}</label>
                                        <input
                                            type={type}
                                            name={key}
                                            className={`form-control`}
                                            placeholder={placeholder}
                                            value={experience.fields[i].value}
                                            onChange={(e) => {
                                                let valor = e.target.value;
                                                let target = e.target.name;
                                                console.log(
                                                    "funciona: ",
                                                    valor,
                                                    target
                                                );
                                                dispatch(
                                                    setDashboard(
                                                        reduxkey,
                                                        target,
                                                        valor,
                                                        i
                                                    )
                                                );
                                            }}
                                        />
                                    </div>
                                );
                            case "checkbox":
                                return (
                                    <div
                                        key={i}
                                        className={`col-md-${col} my-2`}
                                    >
                                        <label>{placeholder}</label>
                                        <input
                                            type={type}
                                            name={key}
                                            className={`form-control`}
                                            placeholder={placeholder}
                                            defaultChecked={
                                                experience.fields[i].value
                                            }
                                            onChange={(e) => {
                                                let valor = e.target.checked;
                                                let target = e.target.name;
                                                console.log(
                                                    "funciona: ",
                                                    valor,
                                                    target,
                                                    experience.fields[i].value
                                                );
                                                dispatch(
                                                    setDashboard(
                                                        reduxkey,
                                                        target,
                                                        valor,
                                                        i
                                                    )
                                                );
                                            }}
                                        />
                                    </div>
                                );
                            case "dropdown":
                                return (
                                    <div
                                        key={i}
                                        className={`col-md-${col} my-2`}
                                    >
                                        <label>{placeholder}</label>
                                        <select
                                            name={key}
                                            className={`form-control`}
                                            defaultValue={
                                                experience.fields[i].value
                                            }
                                            onChange={(e) =>
                                                dispatch(
                                                    setDashboard(
                                                        reduxkey,
                                                        e.target.name,
                                                        e.target.value,
                                                        i
                                                    )
                                                )
                                            }
                                            placeholder={placeholder}
                                        >
                                            <option
                                                defaultValue={
                                                    experience.fields[i].value
                                                }
                                            >
                                                {placeholder}
                                            </option>
                                            {options.length &&
                                                options.map(
                                                    ({ label, val }, i) => (
                                                        <option
                                                            key={i}
                                                            value={val}
                                                        >
                                                            {label}
                                                        </option>
                                                    )
                                                )}
                                        </select>
                                    </div>
                                );
                            case "file":
                                return (
                                    <div
                                        key={i}
                                        className={`col-md-${col} my-2`}
                                    >
                                        {/* <label>{placeholder}</label> */}
                                        <FileContentStyle
                                            className={`d-flex align-items-center justify-content-center ${key}`}
                                            onClick={(e) => {
                                                const elemet =
                                                    document.getElementById(
                                                        key
                                                    );
                                                if (elemet) elemet.click();
                                            }}
                                        >
                                            <div className="row text-center">
                                                <div className="col-md-12">
                                                    <FaCamera />
                                                </div>
                                                <div className="col-md-12">
                                                    <span>{placeholder}</span>
                                                </div>
                                            </div>
                                        </FileContentStyle>
                                        <input
                                            type={type}
                                            id={key}
                                            name={key}
                                            className={`d-none`}
                                            placeholder={placeholder}
                                            onChange={(e) => {
                                                /* let idCardBase64 = "";
                                                getBase64(
                                                    e.target.files[0],
                                                    (result) => {
                                                        console.log(result);
                                                        idCardBase64 = result;
                                                    }
                                                ); */

                                                const { files } = e.target;
                                                console.log(
                                                    "e.target ",
                                                    e.target.files[0]
                                                );
                                                const localImageUrl =
                                                    window.URL.createObjectURL(
                                                        files[0]
                                                    );
                                                dispatch(
                                                    setDashboard(
                                                        reduxkey,
                                                        e.target.name,
                                                        e.target.files[0],
                                                        i
                                                    )
                                                );
                                            }}
                                        />
                                    </div>
                                );
                            case "multiple":
                                return (
                                    <div
                                        key={i}
                                        className={`col-md-${col} my-2`}
                                    >
                                        {/* <label>{placeholder}</label> */}
                                        <FileContentStyle
                                            className={`d-flex align-items-center justify-content-center ${key}`}
                                            onClick={(e) => {
                                                const elemet =
                                                    document.getElementById(
                                                        key
                                                    );
                                                if (elemet) elemet.click();
                                            }}
                                        >
                                            <div className="row text-center">
                                                <div className="col-md-12">
                                                    <FaCamera />
                                                </div>
                                                <div className="col-md-12">
                                                    <span>{placeholder}</span>
                                                </div>
                                            </div>
                                        </FileContentStyle>
                                        <input
                                            type="file"
                                            multiple
                                            id={key}
                                            name={key}
                                            className={`d-none`}
                                            placeholder={placeholder}
                                            onChange={(e) => {
                                                const { files } = e.target;
                                                console.log([
                                                    ...experience.fields[i]
                                                        .value,
                                                    files,
                                                ]);
                                                const localImageUrl =
                                                    window.URL.createObjectURL(
                                                        files[0]
                                                    );
                                                dispatch(
                                                    setDashboard(
                                                        reduxkey,
                                                        e.target.name,
                                                        [
                                                            ...experience
                                                                .fields[i]
                                                                .value,
                                                            ...e.target.files,
                                                        ],
                                                        i
                                                    )
                                                );
                                            }}
                                        />
                                    </div>
                                );
                            case "image":
                                const { user } = JSON.parse(
                                    localStorage.getItem("autospot")
                                );
                                return (
                                    <div
                                        key={i}
                                        className={`col-md-${col} my-2`}
                                    >
                                        {/* <label>{placeholder}</label> */}
                                        <img
                                            src={
                                                experience.fields[i].value
                                                    ? experience.fields[i].value
                                                    : user?.photo_url
                                            }
                                            alt="imagen perfil"
                                            width="100%"
                                        />
                                    </div>
                                );
                            case "textarea":
                                return (
                                    <div
                                        key={i}
                                        className={`col-md-${col} my-2`}
                                    >
                                        <label>{placeholder}</label>
                                        <textarea
                                            type={type}
                                            name={key}
                                            rows={rows}
                                            cols={columns}
                                            className={`form-control`}
                                            placeholder={placeholder}
                                            value={experience.fields[i].value}
                                            onChange={(e) =>
                                                dispatch(
                                                    setDashboard(
                                                        reduxkey,
                                                        e.target.name,
                                                        e.target.value,
                                                        i
                                                    )
                                                )
                                            }
                                        ></textarea>
                                    </div>
                                );

                            default:
                                break;
                        }
                }
            )}
        </>
    );
};
