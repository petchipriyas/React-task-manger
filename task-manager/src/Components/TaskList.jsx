import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, toggleTask }) => {
  if (tasks.length === 0) {
    return <p className="empty-message">No tasks available!</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </div>
  );
};

export default TaskList;