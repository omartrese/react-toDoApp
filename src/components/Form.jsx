import { useState } from "react";

function Form() {

  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);

  const getTasks = () => JSON.parse(localStorage.getItem('tasks')) || []; 
  const setTasks = (tasks) => localStorage.setItem('tasks', JSON.stringify(tasks));
  
  const handleChange = (e) => e.target.name === 'title' ? setTitle(e.target.value) : setDesc(e.target.value);
  const cleanInput = () => {setTitle(''); setDesc('');}

  const addTask = (e) => {
    e.preventDefault();

    if(!title) return;

    let tasks = getTasks(); 

    console.log( {
      title,
      desc
    });

    tasks.push({title, desc});
    setTasks(tasks);

    cleanInput();

  }

  return (
    <div>
      <form className="flex flex-col">
        <input type="text" name="title" placeholder="Title" onChange={handleChange} value={title} />
        <input type="text" name="desc" placeholder="Description" onChange={handleChange} value={desc} />
        <input type="submit" value="Create Task" onClick={addTask} />
      </form>
    </div>
  )
}

export default Form