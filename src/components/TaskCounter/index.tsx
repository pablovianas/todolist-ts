import * as S from './style'

type taskCountProps = {
    taskCreateCount: number;
    taskDoneCount: number;
    taskLength: number;
};
export const TaskCounter = ({ taskCreateCount, taskDoneCount, taskLength }: taskCountProps) => {
    return (
        <S.TaskCounter>
            <div className="tasks-created">
                <span>Tarefas Criadas</span>
                <span>{taskCreateCount}</span>
            </div>
            <div className="task-done">
                <span>Tarefas Concluidas</span>
                <span>
                    {taskLength > 0 ? `${taskDoneCount} de ${taskLength}` : taskDoneCount }
                </span>
            </div>
        </S.TaskCounter>
    );
};