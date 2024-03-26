/* eslint-disable react/prop-types */
function Task(props) {
  return (
    <div className="flex flex-row justify-center items-center w-full bg-slate-600 mb-10">
      <h1>{props.title}</h1>
      {/* <h3>{props.desc}</h3> */}
    </div>
  );
}


Task.defaultProps = {
  title: "Untitled", 
  // desc: "New Task" 
};

export default Task