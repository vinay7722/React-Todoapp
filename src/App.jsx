import react, { useState } from 'react';
import './App.css';
import './index.css';
import './ToDoLists'
import ToDoLists from './ToDoLists';

const App = () => {

  const [inputList,setInputList] = useState("");
  const [Items,setItems] = useState([]);

  const itemevent = (event) => {
      setInputList(event.target.value)
  }

  const listofitems = () => {
      setItems((oldItems) => {
        return [...oldItems, inputList];
      })
      setInputList("")
  }

  const deleteItems = (id) => {
    console.log("clcik")
    setItems((oldItems) => {
      return oldItems.filter((arrElem,index) => {
          return index !== id;
      })
    })
  }

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br/>
          <h1>ToDo List</h1>
          <br/>
          <input type="text" value={inputList} placeholder='Add a Items' onChange={itemevent} />
          <button onClick={listofitems}> + </button>

          <ol>
            {/*<li>{inputList}</li>*/}
            {Items.map((itemval,index) => {
             return  <ToDoLists text={itemval} key={index} id={index} onSelect={deleteItems}/>
            })}
          </ol>

        </div>
      </div>
    </>
  );
}

export default App;
