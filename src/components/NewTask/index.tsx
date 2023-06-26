import plusIcon from '../../assets/plus.svg'
import * as S from './style'

type newTaskProps = {
    taskDescription: string;
    setTaskDescription: (
        event: string
    ) => void;
    handleAddTask: (
        newTask: string,
        event: React.FormEvent<HTMLFormElement>
    ) => void;
};

export const NewTask = ({ taskDescription, setTaskDescription, handleAddTask }: newTaskProps) => {
    
    return (
        <S.Form
            onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
                handleAddTask(taskDescription, event)
            }
        >
            <input
                placeholder="Adicione uma nova tarefa"
                onChange={(event) => setTaskDescription(event.target.value)}
                value={taskDescription}
            />
            <button>
                Criar <img src={plusIcon} alt="Adicinar nova tarefa" />{" "}
            </button>
        </S.Form>
    );
};