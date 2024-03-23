import { useState } from "react";

function Form() {

  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);

  const handleChange = (e) => {
    if(e.target.name === 'title') return setTitle(e.target.value);

    return setDesc(e.target.value);
  }

  const addTask = (e) => {
    e.preventDefault();

    return console.log( {
      title,
      desc
    })
  }

  console.log(title);
  console.log(desc);

  return (
    <div>
      <form>
        <input type="text" name="title" placeholder="Title" onChange={handleChange}/>
        <input type="text" name="desc" placeholder="Description" onChange={handleChange}/>
        <input type="submit" value="Create Task" onClick={addTask} />
      </form>
    </div>
  )
}

export default Form