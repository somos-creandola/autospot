import styled, { createGlobalStyle } from "styled-components";

export const BodyWeb = styled.div`
    background: #eeeeee;
`;
export const Slider = styled.div`
    background: url("/images/banners/banner-autospot-01.jpg");
    background-size: cover;
    width: 100%;
    height: 550px;
`;
export const SliderSmall = styled.div`
    //background: url("/images/banners/banner-autospot-01.jpg");
    background: black;
    background-size: cover;
    width: 100%;
    height: 320px;
`;
export const Navigation = styled.nav`
    position: absolute;
    color: white;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    ul {
        display: flex;
        list-style: none;
        -webkit-box-pack: end;
        justify-content: flex-end;
        li {
            a {
                color: white;
                display: block;
                padding: 1rem;
                position: relative;
                font-weight: bold;
                &:hover {
                    &:before {
                        display: none;
                    }
                }
            }
        }
    }
`;
export const TitleSection = styled.nav`
    height: 570px;
`;
export const Container = styled.nav`
    position: relative;
    top: -45px;
`;
export const Sidebar = styled.nav`
    background: black;
    color: white;
    position: sticky;
    top: 20px;
    border-radius: 6px;
    h3 {
        margin-top: 20px;
        color: rgb(254, 206, 23);
        font-size: 23px;
        margin-bottom: 15px;
    }
    button {
        background: gray;
        border: none;
        border-radius: 3px;
        padding: 7px 20px;
        width: 100%;
        text-transform: uppercase;
        font-weight: bold;
    }
`;
export const ContentBody = styled.nav``;
export const Article = styled.article`
    box-shadow: none;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
    border: ${(props) => (props.boxs ? "2px solid rgb(254, 206, 23)" : "none")};
    cursor: pointer;
    margin-bottom: 20px;
    height: 470px;
    div.feature {
        margin: 0;
        position: relative;
    }
    div.card-content {
        min-height: 150px;
    }
    h5,
    h4 {
        font-weight: bold;
    }
    &:hover {
        box-shadow: 0 0.5em 1em -0.125em hsl(0deg 0% 4% / 10%),
            0 0 0 1px hsl(0deg 0% 4% / 2%);
    }
`;

export const FigureCard = styled.figure`
    height: 300px;
`;
export const FigureCardIsFeature = styled.figure`
    height: 300px;
    &:after {
        content: "VIP";
        padding: 1px 12px;
        position: absolute;
        top: 274px;
        background: rgb(254, 206, 23);
        width: 51px;
        text-align: center;
        left: 220px;
        font-weight: bold;
    }
`;

export const ImageCart = styled.img`
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

export const FooterElement = styled.footer`
    background: rgb(224, 224, 224);
    padding: 40px 10px;
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        a {
            color: #4d4e51;
        }
        li {
            color: #4d4e51;
        }
    }
`;
export const SearchContent = styled.div`
    height: 40px !important;
    margin-top: 17px;
    background: white;
    border-radius: 20px;
    p {
        color: gray;
        position: relative;
        width: 30px;
        top: 6px;
        left: 7px;
    }
    input {
        width: 100%;
        border: none;
        height: 90%;
        &:focus {
            outline: none;
        }
    }
    span.close {
        color: gray;
        position: relative;
        right: 13px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
    }
`;

export const CallToAction = styled.button`
    border-radius: 3px;
    padding: 7px;
    letter-spacing: 2px;
    border-color: rgb(254, 206, 23);
    background-color: rgb(254, 206, 23);
    text-transform: uppercase;
    font-weight: bold;
    transition: all 0.2s ease 0s;
`;
export const DivSelect = styled.div`
    width: 100%;
    border-radius: 0.25em;
    font-size: 1.25rem;
    cursor: pointer;
    line-height: 1.1;
    background-color: #4d4e51;
`;
export const SelectSidebar = styled.select`
    background: #4d4e51;
    color: white;
    margin-bottom: 20px;
    border: none;

    &:focus {
        color: white;
        background: #4d4e51;
        outline: none;
    }
`;

export const LoginContent = styled.div`
    background-image: url("/images/banners/img-login-01.jpg");
    background-size: cover;
    height: 100vh;
    div.emai-div {
        background: white;
        border-radius: 4px;
        span {
            svg {
                color: gray;
                font-size: 25px;
            }
        }
        input {
            border: none;
            width: 300px;
        }
    }
    button {
        margin-top: 5px;
        display: block;
        border-radius: 4px;
        width: 100%;
        padding: 7px;
        letter-spacing: 2px;
        border-color: rgb(254, 206, 23);
        background-color: rgb(254, 206, 23);
        text-transform: uppercase;
        font-weight: bold;
        transition: all 0.2s ease 0s;
    }
    a {
        text-decoration: none;
        color: white;
        position: relative;
        top: 10px;
    }
`;

export const ImgPublis = styled.img`
    height: 500px;
    object-fit: cover;
    border-radius: 10px;
`;

export const ButtonCall = styled.a`
    color: black;
    border: none;
    background: rgb(254, 206, 23);
    border-radius: 5px;
    padding: 10px 25px;
    font-weight: bold;
    text-transform: uppercase;
    &:hover {
        color: black;
        text-decoration: none;
    }
`;
export const ButtonWhatsapp = styled.a`
    color: black;
    border: none;
    background: rgb(96, 221, 0);
    border-radius: 5px;
    padding: 10px 25px;
    font-weight: bold;
    text-transform: uppercase;
    &:hover {
        color: black;
        text-decoration: none;
    }
`;

export const ShowAllVips = styled.button`
    padding: 5px 30px;
    border: none;
    background: rgb(254, 206, 23);
    border-radius: 5px;
    font-weight: bold;
    text-transform: uppercase;
`;
