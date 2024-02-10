import React, { useState } from 'react';
import './style.css';

function Todo() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [edit, setEdit] = useState(null);

  const todoAdd = () => {
    setTodo([...todo, input]);
    setInput("");
  };

  const deleteTod = (index) => {
    const updateTodo = todo.filter((_, i) => i !== index);
    setTodo(updateTodo);
  };

  const deleteAll = () => {
    setTodo([]);
  };

  const editItem = (ele,index) => {
    setEdit(index);
    setInput(ele);
  };

  const editSub = () => {
    let tempTodo = [...todo];
    tempTodo[edit] = input;
    setTodo(tempTodo);
    setInput("");
  };

  return (
    <div className="todo-container">
      <h1>TodoList Application</h1>
      <input
        className="todo-input"
        type="text"
        placeholder="Enter todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="add-button" onClick={todoAdd}>Add</button>
     {todo.length >= 1 && <button className="edit-button" onClick={editSub}>Edit Submit</button>}
      <div className="todo-list">
        {todo.map((add, i) => (
          <div key={i} className="todo-item">
            {add}
            <button onClick={() => deleteTod(i)} className="delete-button">Delete</button>
            <button onClick={() => editItem(add, i)} className="edit-button">Edit</button>
          </div>
        ))}
      </div>
      {todo.length >= 1 && <button onClick={deleteAll} className="delete-all-button">Delete All</button>}
    </div>
  );
}

export default Todo;
