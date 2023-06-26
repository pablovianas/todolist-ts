import { styled } from "styled-components";

export const TaskCounter = styled("div")`
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;

    .tasks-created,
    .task-done {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .tasks-created span:first-child {
        color: #4ea8de;
        font-size: 14px;
        font-weight: 700;
    }
    .task-done span:first-child {
        color: #8284fa;
        font-size: 14px;
        font-weight: 700;
    }
    .tasks-created span:last-child,
    .task-done span:last-child {
        color: #d9d9d9;
        padding: 2px 8px;
        border-radius: 999px;
        font-size: 12px;
        font-weight: 700;
        background: #333;
    }

    @media (width <= 420px) {
      padding: 15px;  
    }
`;