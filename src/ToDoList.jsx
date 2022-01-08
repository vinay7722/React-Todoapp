import react, { useState } from 'react';
import './App.css';
import './index.css';
import './ToDoLists'
import ToDoLists from './ToDoLists';

const App = () => {

  const [num,setNum] = useState("");

    const Incnum = () => {
        setNum(num+1)
    }
    const Decnum = () => {
        if(num > 0){
            setNum(num-1)
        }
        else{
            alert("0")
            setNum(0)
        }
           
    }

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br/>
          <h1>{num}</h1>
          <br/>
          <button onClick={Incnum}>Increment</button><br/>
          <button onClick={Decnum}>Decrement</button>
        </div>
      </div>
    </>
  );
}

export default App;
