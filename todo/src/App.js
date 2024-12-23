import { useState } from 'react';
import './App.css';
import AddTask from './componenets/addTask'
import DisplayTask from './componenets/displayTask';

//const arr = [{todo:'eat',isComplete:false},{todo:'run',isComplete:true}]
function App() {
  // Initialize tasks with unique ids
  const [arr, setArr] = useState([
    { id: 1, todo: 'Eat', isComplete: true },
    { id: 2, todo: 'Run', isComplete: false },
  ]);

  // Toggle Task Completion
  function handleCheckbox(id) {
    setArr((prevArr) =>
      prevArr.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  }

  // Delete Task
  function handleDelete(id) {
    setArr((prevArr) => prevArr.filter((task) => task.id !== id));
  }

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <AddTask />
      <DisplayTask data={arr} onToggle={handleCheckbox} onDelete={handleDelete} />
    </div>
  );
}

export default App;
