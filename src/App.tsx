import './App.css';

/*
  작성자 : 
  작성일 :
  내용 : 기능에 대한 내용
*/

function App() {
  let name = '리액트';

  const style = {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: '20px'
  }
  return (
    <div className='container'>
      <h1 className='test'>Hello, {
      name === '리액트' ? (<h1>YES</h1>): (<h1>NO</h1>)
    }
      !!</h1>
      <p>반갑습니다.</p>
    </div>
  );
}

export default App;
