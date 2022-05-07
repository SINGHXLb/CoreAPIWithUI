import React from 'react';
import logo from './logo.svg';
import './App.css';

const {useState} = React; 

function App() {
    const [counter, setCounter] = useState(0);
    return (
        <div className="App">
            <p>
                {counter}
            </p>
            <button onClick={() => {
                setCounter(counter + 1);
            }
            }> click here </button>
        </div>
    );
}
export default App;
