import Tick from "./Tick";
import Trash from "./Trash";

/* eslint-disable react/prop-types */
function Task(props) {
  return (
    <div className="flex flex-row justify-center items-center w-3/4 bg-slate-600 my-10">
      <button type="button">
        <Trash />
      </button>

      <div className="w-task mx-6 py-2 px-1 text-center text-2xl rounded-md bg-complement">
        <h1>{props.title}</h1>
      </div>

      <button type="button">
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