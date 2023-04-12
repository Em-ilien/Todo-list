import React from "react";
import Task from "./Task.jsx";
import NewTask from "./NewTask.jsx";
import {useSnapshot, state} from "../store.js";

export default function FilterCard(props) {
  const snap = useSnapshot(state);

  const tasksList = snap.tasks.map((task, index) => (
    <Task key={index} task={task}/>
  ));

  return (
    <div className="FilterCard" style={filterCard}>
      <header style={header}>
        <h3 style={cardTitle}>{props.title}</h3>
        <i className="material-icons" style={moreIcon}>more_vert</i>
      </header>
      <div className="content">
        <NewTask />
        <div style={tasksListStyle}>
          {tasksList}
        </div>
      </div>
    </div>
  );
}

const filterCard = {
  gap: "1em",
  padding: "0.5em 1.5em 2em 1.5em",
  minWidth: "15em",
  background: "#444248",
  boxShadow: "4px 4px 14px rgba(0, 0, 0, 0.15)",
  borderRadius: "0.75em",
  minHeight: "6em",
}

const header = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  alignItems: "center",
  gap: "2em",
}

const cardTitle = {
  margin: "0.425em 0em",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "1.3em",
  color: "#fff",
  whiteSpace: "nowrap",
}

const moreIcon = {
  fontSize: "1.75em",
  color: "#ffffff00",
  cursor: "pointer",
  borderRadius: "2em",
}

const tasksListStyle = {
  display: "flex",
  flexDirection: "column-reverse",
}