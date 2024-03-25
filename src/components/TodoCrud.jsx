import { useState, useEffect } from "react";
import Task from "./Task";

function TodoCrud() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleChange = (e) => e.target.name === 'title' ? setTitle(e.target.value) : setDesc(e.target.value);

  const addTask = (e) => {
    e.preventDefault();
    if(!title) return;

    const newTask = {title, desc, id: tasks.length};
    setTasks(prevTasks => [...prevTasks, newTask]);

    setTitle('');
    setDesc('');
  }

  const tasksComponents = tasks.map(task => 
    <li key={task.id}>
      <Task title={task.title} desc={task.desc} />
    </li>
  );

  return (
    <div>
      <form className="flex flex-col">
        <input type="text" name="title" placeholder="Title" onChange={handleChange} value={title} autoComplete="off" />
        <input type="text" name="desc" placeholder="Description" onChange={handleChange} value={desc} autoComplete="off" />
        <input type="submit" value="Create Task" onClick={addTask} />
      </form>

      <ul>
        {tasksComponents}
      </ul>
    </div>
  )
}

export default TodoCrud;