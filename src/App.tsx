import './App.css';
import MyWeather from './MyWeather';
// import Clock from './Timer';
import TodoList from './Todolist';

function App() {
  return (
    <div className='container'>
      <TodoList />
      {/* <Clock /> */}
      <MyWeather weather='비'>
        일기예보
      </MyWeather>
    </div>
  );
}

export default App;
