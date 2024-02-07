import { v4 as uuidv4 } from 'uuid';
import './App.css';
import { useRef, useState } from 'react';

function App() {
  const inputRef = useRef(null);

  const [tasks, setTasks] = useState([]);

  function addTask() {
    const newTask = {
      id: uuidv4(),
      description: inputRef.current.value,
    }

    const newTasks = [newTask, ...tasks];
    setTasks(newTasks)
  }

  function deleteTask(task) {
    const newTasks = tasks.filter(t => t != task)

    setTasks(newTasks)
  }

  function editTask(task) {}

  return (
    <div className="App">
      <input ref={inputRef} name='todo_input' />

      <button onClick={addTask}>Add</button>

      {tasks.map((task, index) => (
        <div key={index}>
          <span>{task.description}</span>
          <button onClick={() => deleteTask(task)}>Delete</button>
          <button onClick={() => editTask(task)}>Edit</button>
          <br />
        </div>
      ))}
    </div>
  );
}

export default App;
