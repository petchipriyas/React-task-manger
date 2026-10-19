const TaskItem = ({ task, deleteTask, toggleTask }) => {
  return (
    <div className="task-item">
      <span
        className={task.completed ? "completed" : ""}
        onClick={() => toggleTask(task.id)}
      >
        {task.title}
      </span>

      <div className="task-actions">
        <button
          onClick={() => toggleTask(task.id)}
          className="complete-btn"
        >
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button
          onClick={() => deleteTask(task.id)}
          className="delete-btn"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;