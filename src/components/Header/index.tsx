import rocket from "../../assets/rocket.png";
import todo from "../../assets/todo.png";
import * as S from './style'

export const Header = () => {
    return (
        <S.Header>
            <img src={rocket} alt="rocket logo" />
            <img src={todo} alt="todo text" />
        </S.Header>
    );
};
