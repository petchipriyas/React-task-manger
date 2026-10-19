import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Add a new task
  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  // Mark task as completed or undo
  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Update localStorage and document title
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    document.title = `Tasks (${tasks.length})`;
  }, [tasks]);

  // Component load message
  useEffect(() => {
    console.log("Task Manager App Loaded");
  }, []);

  const completedCount = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <div className="app-container">
      <h1>Task Manager App</h1>

      <TaskForm addTask={addTask} />

      <div className="task-summary">
        <p>Total Tasks: {tasks.length}</p>
        <p>Completed: {completedCount}</p>
        <p>Pending: {tasks.length - completedCount}</p>
      </div>

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    </div>
  );
};

export default App;