import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addTodo = () => {
    setTodos((prevTodo) => {
      return [...prevTodo, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodo = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodo) => todos.filter((prevTodo) => prevTodo.id != id));
  };

  let isDoneAll = () => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  let isDoneOne = (isDone) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => {
        if (todo.isDone == false) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <input
        placeholder="add a task"
        value={newTodo}
        onChange={updateTodo}
      ></input>
      <br></br>
      <button onClick={addTodo}>Add Task</button>
      <br></br>
      <br></br>
      <hr></hr>
      <h4>ToDo List</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={todo.isDone ? { textDecorationLine: "line-through" } : {}}
            >
              {todo.task}
            </span>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
            <button onClick={() => isDoneOne(todo.isDone)}>Mark as Done</button>
          </li>
        ))}
      </ul>
      <br></br>
      <button onClick={isDoneAll}> AllMark as Done</button>
    </div>
  );
}

export default TodoList;
