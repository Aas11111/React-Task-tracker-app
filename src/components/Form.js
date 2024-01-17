import { useState } from "react";
import "./Form.css";

function Form({ onAddLists }) {
  const [name, SetName] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const newItem = {
      name,
      task,
      date,
      completed: false,

      id: Date.now(),
    };
    // console.log(newItem);
    onAddLists(newItem);
    SetName("");
    setTask("");
    setDate("");
  }

  return (
    <>
      <h3> Add Your Daily Tasks</h3>
      <form className="add-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your name..."
          value={name}
          onChange={(e) => SetName(e.target.value)}
        />
        <input
          type="text"
          placeholder="task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="date"
          name=""
          id=""
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button>Add</button>
      </form>
    </>
  );
}
export default Form;
