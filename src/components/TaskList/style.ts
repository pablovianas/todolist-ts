import styled from "styled-components";

export const TaskList = styled("li")`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    p {
        align-self: start;
        width: 100%;
    }

    p.done {
        text-decoration: line-through;
        color: #808080;
    }
    img {
        cursor: pointer;
    }

    @media (width <= 420px) {
        width: 300px;
        margin: 0 auto;
        p {
            width: 50%;
        }
    }
`;