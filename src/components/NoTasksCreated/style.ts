import styled from "styled-components";

export const NoTasksCreated = styled("div")`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 64px 24px;
    gap: 16px;
    border-radius: 8px;
    border-top: 1px solid #333;

    .task-description {
        display: flex;
        flex-direction: column;
        text-align: center;
        color: #808080;
        font-size: 16px;
        font-family: Inter;

        line-height: 140%;
        p {
            margin: 0;
            color: #808080;
            font-weight: 400;
        }
    }

    @media (width <= 420px) {
        width: 300px;
        margin: 0 auto;
    }
`;