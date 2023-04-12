import React from 'react';
import { state, changeTaskStatus } from "../store.js";
import { useSnapshot } from "valtio";

export default function Task(props) {
  const snap = useSnapshot(state);
  const task = state.tasks.find(task => task.id === props.task.id);
  
  function onCheckboxClicked(e) {
    changeTaskStatus(task.id);
  }

  function onClickOnTaskTitle(e) {
    
  }

  return (
    <div className="Task" key={task.id} style={taskStyle} data-done={snap.tasks[task.id].done}>
      <div className="checkbox" style={checkbox} onClick={onCheckboxClicked}>
        <i className="material-icons" style={checkmarkIcon}>check</i>
      </div>
      <span style={taskTitle} onClick={onClickOnTaskTitle}>{task.title}</span>
    </div>
  );
}

const taskStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "1em",
  margin: "0.5em 0em",
  cursor: "pointer",
}

const checkbox = {
  width: "1em",
  height: "1em",
  borderRadius: "0.25em",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid #fff",
}

const checkmarkIcon = {
  fontSize: "1em",
  color: "#fff",
  opacity: "0",
  cursor: "pointer",
}

const taskTitle = {
  whiteSpace: "nowrap",
}