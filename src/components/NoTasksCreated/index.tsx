import clipBoard from '../../assets/Clipboard.png'
import * as S from './style'
export const NoTasksCreated = () => {
    return (
        <S.NoTasksCreated>
            <img src={clipBoard} alt="" />
            <div className='task-description'>
                <strong>Você ainda não tem tarefas cadastradas</strong> 
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </S.NoTasksCreated>
    );
}