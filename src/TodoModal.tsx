import React from 'react';
import { Modal } from 'react-bootstrap';

type Todo = {
    id: number;
    text: string;
    isChecked: boolean;
}
type TodoMoadlProps = {
    show: boolean;
    todo: Todo | null;
    handelClose: () => void;
}

const TodoModal: React.FC<TodoMoadlProps> = ({show, todo, handelClose}) => {
    return(
        <div>
            <Modal show={show} onHide={() => handelClose()} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Todo 상세 정보</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {todo?.text}
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default TodoModal;