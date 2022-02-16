import styled from "styled-components";

export const Sidebar = styled.div`
    min-height: 100vh;
    //height: 100%;
    background: black;
    color: white;
    div.content-logo {
        position: sticky;
        top: 10px;
    }
    div.content-nav {
        position: sticky;
        top: 100px;
    }
    div.puls-btn {
        background: rgb(254, 206, 23);
        border-radius: 4px;
        span {
            svg {
                color: black;
            }
        }
        button {
            background: transparent;
            border: none;
        }
    }
    ul {
        list-style: none;
        padding: 0;
        li {
            margin-bottom: 10px;
            a {
                color: white;
                text-decoration: none;
                cursor: pointer;
                font-size: 18px;
            }
        }
    }
`;
export const Content = styled.div`
    background: url("/images/banners-app/bg.jpg");
    background-size: cover;
    min-height: 100vh;
    height: 100%;
    color: white;
    .title {
        h1 {
            &::after {
                content: "";
                position: absolute;
                border: 2px solid yellow;
                border-color: yellow transparent;
                display: block;
                width: 60px;
                z-index: 1;
                margin-left: 190px;
                top: 44px;
            }
        }
    }
`;

export const ButtonStore = styled.button`
    width: 100%;
    background: rgb(254, 206, 23);
    border-radius: 4px;
    border: none;
`;

export const Table = styled.table`
    color: white;
    thead {
        align-items: center;
    }
    tbody tr:hover td,
    tbody tr:hover th {
        background-color: black;
        color: white;
        font-size: 17px;
    }
`;

export const ContentTable = styled.div`
    height: 450px;
    overflow-y: scroll;
`;

export const WelcomeContent = styled.div`
    background: url("/images/banners-app/bg.jpg");
    min-height: 100vh;
    height: 100%;
    color: white;
    margin: 0;
    div.content {
        z-index: 1;
    }
    &::after {
        content: "";
        background: black;
        height: 100%;
        width: 100% !important;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.5;
    }
`;

export const FileContentStyle = styled.div`
    color: gray;
    font-size: 12px;
    width: 100%;
    height: 150px;
    margin: 30px auto;
    background: white;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='black' fill-rule='evenodd' stroke='gray' stroke-width='5' stroke-dasharray='3 10'/%3e%3c/svg%3e");
    svg {
        font-size: 30px;
    }
`;

export const WelcomeBtn = styled.button`
    width: 92%;
    background: rgb(254, 206, 23);
    border-radius: 4px;
    border: none;
    padding: 6px 3px !important;
    margin-top: 17px !important;
`;

export const LoadingStyles = styled.div`
    min-height: 100vh;
    height: 100%;
    background: black;
    color: white;
    img {
        animation: beat 1s infinite alternate;
    }
    @keyframes beat {
        to {
            transform: scale(1.4);
        }
    }
`;
