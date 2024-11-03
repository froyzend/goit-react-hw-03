import { useState } from "react";
import css from "./ToDoList.module.css";

function ToDoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (event) => {
    event.preventDefault();
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const handleToggleTask = (index) => {
    const newTaskList = tasks.map((t, i) => {
      if (i === index) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });
    setTasks(newTaskList);
  };

  return (
    <div className={css.ToDoList}>
      <h2>To Do List</h2>
      <input
        className={css.TaskInput}
        type="text"
        placeholder="Enter task"
        required
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className={css.AddTaskBtn} type="button" onClick={handleAddTask}>
        Add task
      </button>
      <ul className={css.TasksList}>
        {tasks.map((t, index) => (
          <li
            className={css.Task}
            key={index}
            style={{ textDecoration: t.completed ? "line-through" : "none" }}
          >
            <input
              className={css.Checkbox}
              type="checkbox"
              checked={t.completed}
              onChange={() => handleToggleTask(index)}
            />
            {t.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
