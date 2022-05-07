import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 
import Dashboard from './components/Dashboard'; 
import AppBar from  './components/AppBar1'



// Instantiation

const {useState} = React; 

function App() {
    const [counter, setCounter] = useState(0);
    return (
        <div className="App"> 

         
             <AppBar />
          

                <p>
                    {counter}
                </p>
                <button onClick={() => {
                    setCounter(counter + 1);
                }
                }> click here </button>

                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                />
                <Dashboard />
            

      
            

        </div>
    );
}
export default App;
