import { styled } from "styled-components";

export const Form = styled("form")`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    transform: translateY(-50%);
    border-radius: 8px;
    z-index: -1;

    input {
        padding: 16px;
        font-size: 16px;
        color: #808080;
        border: none;
        border-radius: 8px;
        flex: 1 0 0;
    }
    button {
        padding: 16px;
        border-radius: 8px;
        background: #1e6f9f;
        color: #f2f2f2;
        font-size: 16px;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 8px;
        border: none;
        cursor: pointer;
    }

    @media(width <= 420px){
        input{
            width: 50%;
            flex: initial;
        }
    }
`;