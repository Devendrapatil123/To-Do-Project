import { useState } from "react";
import { MdAddTask } from "react-icons/md";

function AddTodo({ onNewItem }) {

  const [todoName,setTodoName]=useState("");
  const [todoDate,setTodoDate]=useState("");

  const HandleTodoChange = (event)=>{
   setTodoName(event.target.value);
  }
  
  const HandleDateChange=(event)=>{
    setTodoDate(event.target.value);
  }

  const OnbuttonClick = ()=>{
    onNewItem(todoName,todoDate);
    setTodoDate("");
    setTodoName("");
  }

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here"
           value={todoName}
           onChange={HandleTodoChange} />
        </div>
        <div className="col-4 ">
          <input type="date" onChange={HandleDateChange} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button" onClick={OnbuttonClick} >
          <MdAddTask />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
