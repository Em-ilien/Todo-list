import React from 'react';
import { state, changeTaskStatus, showTaskContextMenu } from "../store.js";
import { useSnapshot } from "valtio";

export default function Task(props) {
  const snap = useSnapshot(state);
  const task = snap.tasks.find(task => task.id === props.task.id);
  
  function onCheckboxClicked(e) {
    changeTaskStatus(task.id);
  }

  function openContextMenu(e) {
    showTaskContextMenu(task.id);

    setTimeout(() => {
      let titleInput = document.querySelector(".Task.ContextMenu input[name='title']");
      titleInput.focus();
      titleInput.setSelectionRange(0, titleInput.value.length);
    }, 0);
  }

  return (
    <div className="Task" key={task.id} style={taskStyle} onClick={openContextMenu} data-done={snap.tasks[task.id].done} data-task-opened-on-context-menu={snap.contextMenuTaskId == task.id}>
      <div className="checkbox" style={checkbox} onClick={onCheckboxClicked}>
        <i className="material-icons" style={checkmarkIcon}>check</i>
      </div>
      <span style={taskTitle}>{task.title}</span>
    </div>
  );
}

const taskStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "1em",
  padding: "0.5em 1em",
  margin: "0 -1em",
  borderRadius: "0.5em",
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