import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import TodoModal from './TodoModal';

type Todo = {
    id: number;
    text: string;
    isChecked : boolean;
}

const TodoList: React.FC = () => {
    const title: string = "오늘 할일";

    // 구조 분해 할당
    const [todos, setTodos] = useState<Todo[]>([
        {
            id: 1,
            text: '공부하기',
            isChecked: false
        },
         {
            id: 2,
            text: '잠자기',
            isChecked: false
        },
        {
            id: 3,
            text: '미팅하기',
            isChecked: false
        },
    ]);

    const [newTodo, setNewTodo] = useState<string>('');

    const [showDetail, setShowDetail] = useState<boolean>(false);
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
    
    const handleCheckedChange = (itemId: number) => {
        setTodos((prevItems) => 
            prevItems.map((item) => 
                item.id === itemId ? {...item, isChecked: !item.isChecked} : item
            )
        )
    }

    const addTodo = () => {
        if(newTodo.trim() !== '') {
            setTodos([...todos, {
                id: Date.now(),
                text: newTodo,
                isChecked: false
            }])
            setNewTodo('');
        }
    }

    const removeTodo = (itemId: number) => {
        setTodos((prevItems) => 
            prevItems.filter((item) => item.id !== itemId)
        )
    }

    const handleTodoClick = (todo: Todo) => {
        setShowDetail(true);
        setSelectedTodo(todo);
    }
    
    const handleCloseDetail = () => {
        setShowDetail(false);
        setSelectedTodo(null);
    }

    return(
        <div>
            <h1>{title}</h1>
            <p></p>
            <div className="container">
                <div>
                    <input type='text'
                    placeholder='할일 입력'
                    onChange={(e) => {setNewTodo(e.target.value)}}
                    style={{ marginRight: '10px', writingMode: 'horizontal-tb' }}/>
                    <Button onClick={addTodo}>추가</Button>
                </div>
                <p></p>
                <div className='board'>
                    <ul>
                        {
                            todos.map((todo) =>(
                                 <li key={todo.id}>
                                    <input type="checkbox" checked={todo.isChecked} onChange={() => handleCheckedChange(todo.id)}/>
                                    <span onClick={() => handleTodoClick(todo)}>
                                        {
                                            todo.isChecked ? <del>{todo.text}</del> : <>{todo.text}</>
                                        }
                                    </span>
                                    <button
                                    onClick={() => removeTodo(todo.id)}
                                    className='del-button'
                                    >삭제</button>
                                </li>
                                ))
                        }
                    </ul>
                </div>
                
            </div>
            <TodoModal show={showDetail} todo={selectedTodo} handelClose={handleCloseDetail}/>
        </div>
        
    )
}

export default TodoList;