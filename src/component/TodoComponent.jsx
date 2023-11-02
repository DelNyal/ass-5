import React, { useState } from "react";
import "../styles/Todo.css"; // Add corresponding CSS for styling
import { useAppContext } from "../context/AppContext";
const TodoComponent = () => {
  const {todos,handleSearch,handleAddTodo,handleDeleteTodo,updateCheckedStatus,searchTerm,todoText} = useAppContext();
  todos.sort((a, b) => new Date(b.id) - new Date(a.id));
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  }
  return (
    <div className="cover-">
    <div className="todo-container">
      <h2>TODO</h2>
      <div className="todo-header">
        <input
          type="text"
          placeholder="Add or Search Todo"
          value={todoText}
          onKeyDown={handleKeyDown}
          onChange={(e) => handleSearch(e)}
        />
        <button className="submit" onClick={handleAddTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <div className="right">
              <input
                type="checkbox"
                id="checkbox"
                checked={todo.checked}
                className="styled-checkbox"
                onChange={()=> updateCheckedStatus(todo.id)}
              />
              <p onClick={()=> updateCheckedStatus(todo.id)} style={{ textDecoration: todo.checked ? 'line-through' : 'none',cursor:"pointer" }}>
            {todo.text}
            </p>
              </div>
              <img width={20} height={20} src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png" className="delete-icon" onClick={() => handleDeleteTodo(todo.id)}/>
              
            
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default TodoComponent;
