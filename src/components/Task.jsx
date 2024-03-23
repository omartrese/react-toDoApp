import PropTypes from 'prop-types';

function Task({ title = 'Untitled', desc = 'New Task' }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
}

Task.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string
};

export default Task