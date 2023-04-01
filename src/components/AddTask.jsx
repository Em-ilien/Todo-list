import React, { useState } from "react";

function AddTask(props) {
  const [input, setInput] = useState("");
  return (
    <div className="AssTask">
      <input
        type="text"
        placeholder="Ajouter un todo"
        size="100"
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <button onClick={() => props.addTask(input)}>Add Task</button>
    </div>
  );
}

export default AddTask;
