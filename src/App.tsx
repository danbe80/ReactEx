import './App.css';
import Clock from './Timer';
import TodoList from './Todolist';

function App() {
  return (
    <div className='container'>
      <TodoList />
      <Clock />
    </div>
  );
}

export default App;
