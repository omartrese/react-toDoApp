/* eslint-disable react/prop-types */
import Trash from "./Trash"
import Tick from "./Tick"

function Task(props) {
  return (
    <div className="flex flex-row justify-around items-center my-10 bg-slate-600">

      <button className="bg-red-600 p-1 rounded-md scale-100 transition duration-75 hover:scale-110 active:scale-90" type="button" onClick={props.onDelete}>
        <Trash />
      </button>

      <div className={`w-56 text-center text-2xl bg-complement mx-5 p-3 rounded-md ${props.completed ? 'line-through' : ''}`}>
        <h1>{props.title}</h1>
      </div>

      <button className="bg-green-600 p-1 rounded-md scale-100 transition duration-75 hover:scale-110 active:scale-90" type="button" onClick={props.onToggle}>
        <Tick />
      </button>
    </div>
  );
}


Task.defaultProps = {
  title: "Untitled",
  // desc: "New Task" 
};

export default Task