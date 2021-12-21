import React,{useState}from "react";
import ToDoList from "./ToDoList";

const App = () =>{
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const itemEvent = (event) =>{
      setInputList(event.target.value);
  }
  const listItems = () => {
     setItems((prevItems)=>{
       return [...prevItems,inputList]
     })
     setInputList("");
  }
  const deleteItem = (id) =>{
    setItems((prevItems)=>{
      return prevItems.filter((currArr, index)=>{
        return index!==id;
      }) 
    })
  }
  return (
    <>
      <div className="container">
        <div className="mid_div">
          <br />
          <h1>To Do List</h1>
          <br />
          <input type="text" placeholder="Add Items" 
          value={inputList} onChange={itemEvent}/>
          <button onClick={listItems}> + </button>
          <ol>
            {
              /* <li>
              {inputList}
            </li> */}

            {
              Items.map((val,index)=>{
                return<ToDoList
                  text={val}
                  id = {index}
                  key = {index}
                  onSelect = {deleteItem}
                />
              })
            }
          </ol>
        </div>
      </div>
    </>
  )
}
export default App;