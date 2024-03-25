/* eslint-disable react/prop-types */
function Task(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.desc}</h3>
    </div>
  );
}

Task.defaultProps = {
  title: "Untitled", 
  desc: "New Task" 
};

export default Task