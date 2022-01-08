import react, { useState } from 'react';
import './App.css';
import './index.css';
import './ToDoLists'
import ToDoLists from './ToDoLists';
import Button from '@mui/material/Button';

const App = () => {

  const [num,setNum] = useState("");

    const Incnum = () => {
        setNum(num + 1)
        console.log("inc" + (num + 1) )
    }
    const Decnum = () => {
        if(num > 0){
            setNum(num - 1)
            console.log("dec" + (num - 1) )
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
          
          <Button  variant="contained" color="success" onClick={Incnum}>Increment</Button><br/><br/>
          <Button  variant="outlined" color="error" onClick={Decnum}>Decrement</Button>
        </div>
      </div>
    </>
  );
}

export default App;
