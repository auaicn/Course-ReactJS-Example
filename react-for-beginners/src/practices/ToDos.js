import { useState } from "react";

function ToDos() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const onChange = (event) => setTask(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (task === "") {
      return;
    }
    setTasks((currentTasks) => [task, ...currentTasks]);
    setTask("");
  };
  console.log(tasks);

  return (
    <div>
      <h1>Today's Task</h1>
      <h3> {tasks.length} stuffs left.</h3>
      <form onSubmit={onSubmit}>
        <input value={task} onChange={onChange} placeholder="Write your task :)" type="text" />
        <button>Add </button>
      </form>
      <hr />
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </div>
  );
}

export default ToDos;
