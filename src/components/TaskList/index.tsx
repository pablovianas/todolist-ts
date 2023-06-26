import trashIcon from '../../assets/trash.svg';
import checkBoxIcon from '../../assets/check.svg';
import checkBoxDoneIcon from '../../assets/done.svg'
import * as S from './style'

type setTaskDoneProps = {
    task: string;
    taskDone: boolean;
    index: number;
    handleTaskChange: (index: number) => void;
    handleTaskDelete: (index: number) => void;
};


export const TaskList = ({
    task,
    index,
    taskDone,
    handleTaskChange,
    handleTaskDelete,
}: setTaskDoneProps) => {
    return (
        <S.TaskList>
            <img
                onClick={() => handleTaskChange(index)}
                alt=""
                src={taskDone ? checkBoxDoneIcon : checkBoxIcon}
            />
            <p className={taskDone ? "done" : ""}>{task}</p>
            <img
                src={trashIcon}
                onClick={() => handleTaskDelete(index)}
                alt="Delete task icon"
            />
        </S.TaskList>
    );
};