import { useState, useEffect } from "react";
import Task from "./Task";
import Add from "./Add";

function TodoCrud() {
  const [title, setTitle] = useState("");
  // const [desc, setDesc] = useState("");
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleChange = (e) => setTitle(e.target.value);

  const addTask = (e) => {
    e.preventDefault();
    if(!title) return;

    const newTask = {title, id: tasks.length};
    setTasks(prevTasks => [...prevTasks, newTask]);

    setTitle('');
  }

  const tasksComponents = tasks.map(task => 
    <li key={task.id}>
      <Task title={task.title} desc={task.desc} />
    </li>
  );

  return (
    <div>
      <form className="flex flex-row justify-center">
        <input type="text" name="title" placeholder="Title" onChange={handleChange} value={title} autoComplete="off"  className="text-2xl rounded-sm" />
        {/* <input type="text" name="desc" placeholder="Description" onChange={handleChange} value={desc} autoComplete="off" /> */}
        <button type="submit" onClick={addTask}>
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