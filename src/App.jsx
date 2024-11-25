import { useState } from "react";
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList";
import CalendarView from "./components/CakendarView";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => setTasks([...tasks, task]);

  const deleteTask = (index) =>
    setTasks(tasks.filter((_, i) => i !== index));

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
      <CalendarView tasks={tasks} />
    </div>
  );
};

export default App;
