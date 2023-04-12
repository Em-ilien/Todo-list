import React from 'react';
import { state, addNewTask } from "../store.js";
import { useSnapshot } from "valtio";


export default function Task(props) {
    const snap = useSnapshot(state);

    function onClickNewTask(e) {
        console.log("New task clicked");
        addNewTask("new");
    }
    
  return (
    <div className="New Task" style={newTask} onClick={onClickNewTask}>
      <div className="checkbox" style={checkbox}>
        <i className="material-icons" style={checkmarkIcon}>check</i>
      </div>
      <span style={newTaskLabel}>Nouvelle tâche...</span>
    </div>
  );
}

const newTask = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "1em",
  margin: "0.5em 0em",
  opacity: "0.3",
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

const newTaskLabel = {
    fontStyle: "italic",
    fontFamily: "sans-serif",
}