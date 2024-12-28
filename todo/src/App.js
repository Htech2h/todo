import { useState } from 'react';
import './App.css';
import AddTask from './componenets/addTask'
import DisplayTask from './componenets/displayTask';

//const arr = [{todo:'eat',isComplete:false},{todo:'run',isComplete:true}]
function App() {
  // Initialize tasks with unique ids
  const [arr, setArr] = useState([
    { id: 1, todo: 'wake-up', isComplete: true },
    { id: 2, todo: 'eat', isComplete: false },
  ]);
  const [theme,setTheme] = useState(true);

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

  //adding task
  function addTask(task){
    setArr([...arr,task]);
  }
//to allow user to switch between dark and light mode
  function Theme(){
    setTheme(!theme);
  }

  //make sure completed tasks go to the bottom to minimiz

  return (
    <div style={{backgroundColor:theme? '#333':'#fff',color: theme?'white':'#444'}} className="App">
      <button onClick={Theme}  >@</button>
      <h1>My Todo List</h1>
      <AddTask handleSubmit={addTask} />
      <DisplayTask data={arr} onToggle={handleCheckbox} onDelete={handleDelete} />
    </div>
  );
}

export default App;
