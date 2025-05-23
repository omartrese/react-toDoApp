import { useState, useEffect } from "react";
import Task from "./Task";
import Add from "./Add";

function TodoCrud() {
  const [title, setTitle] = useState("");
  // const [desc, setDesc] = useState("");
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);
  const [nextId, setNextId] = useState(() => {
    const saved = localStorage.getItem('nextId');
    return saved ? JSON.parse(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('nextId', JSON.stringify(nextId));
  }, [nextId]);

  const handleChange = (e) => setTitle(e.target.value);

  const addTask = (e) => {
    e.preventDefault();
    if (!title || !title.trim()) return;

    const newTask = { title, id: nextId, completed: false };
    setTasks(prevTasks => [...prevTasks, newTask]);
    setNextId(prevId => prevId + 1);

    setTitle('');
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const toggleCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  }

  const tasksComponents = tasks.map(task =>
    <li className="flex justify-center items-center" key={task.id}>
      <Task title={task.title} onDelete={() => deleteTask(task.id)} onToggle={() => toggleCompletion(task.id)} completed={task.completed} />
    </li>
  );

  return (
    <div>
      <form className="flex flex-row justify-center">
        <input type="text" name="title" placeholder="Title" onChange={handleChange} value={title} maxLength={14} autoComplete="off" className="text-2xl p-1 w-60 mx-4 rounded-md bg-contrast" required />
        {/* <input type="text" name="desc" placeholder="Description" onChange={handleChange} value={desc} autoComplete="off" /> */}
        <button type="submit" onClick={addTask} className="rounded-md mx-4 p-2 bg-complement scale-100 transition duration-75 hover:scale-110 active:scale-90">
          <Add />
        </button>
      </form>

      <ul>
        {tasksComponents}
      </ul>
    </div>
  )
}

export default TodoCrud;