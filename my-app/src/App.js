import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        {
          isLogin ?"登錄了":"未登錄啊"
        }
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          i am patrick, welcome to react
          <button onClick={()=>{
            setIsLogin(true)
            console.log("hi, button is pressed")
          }}>Log in</button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
