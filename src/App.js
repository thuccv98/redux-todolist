import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction } from './actions/TodoActions';
import './App.css';

function App() {
  const [todo, setTodo] = useState();

  const dispatch = useDispatch();

  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
    dispatch(AddTodoAction(todo));
  };

  const removeHandler = (i) => {
    dispatch(RemoveTodoAction(i));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List App in Redux</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a Todo"
            style={{
              width: 350,
              padding: 10,
              borderRadius: 20,
              border: 'none',
              fontSize: 20,
            }}
            // khi imput thay doi, lay gia tri input de set lam todo
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            style={{
              padding: 12,
              borderRadius: 25,
              fontSize: 15,
              marginLeft: 20,
            }}
          >
            Go
          </button>
        </form>
        <ul className="allTodos">
          {todos &&
            todos.map((i) => (
              <li key={i.id} className="singleTodo">
                <span className="todoText">{i.todo}</span>
                <button
                  style={{
                    borderRadius: 25,
                    padding: 10,
                    border: '1px solid white',
                    color: 'white',
                    backgroundColor: 'orangered',
                  }}
                  onClick={() => removeHandler(i)}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
