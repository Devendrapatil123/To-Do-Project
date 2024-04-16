import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import Welcome from "./components/Welcome";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const HandleNewItem = (itemName ,itemDueDate) =>{
    // console.log(`New Item Added : ${itemName} date : ${itemDueDate}`)

    const newToDoItems= [...todoItems,{
      name:itemName,
      dueDate:itemDueDate
    }];
    setTodoItems(newToDoItems);
  }

  const HandleDeleteItem =(todoItemName)=>{
    const newTodoItems=todoItems.filter(item =>item.name !== todoItemName);
    setTodoItems(newTodoItems);
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={HandleNewItem} />
      {todoItems.length === 0 && <Welcome></Welcome>}
      <TodoItems todoItems={todoItems} onDelete={HandleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
