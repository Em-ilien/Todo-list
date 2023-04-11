import React from "react";
import {useSnapshot, state} from "../store.js";

export default function FilterCard(props) {
  const snap = useSnapshot(state)
  
  const tasksList = state.tasks.map((task) => (
    <li key={task.id} style={taskStyle}>
      <input type="checkbox" />
      <span>{task.title}</span>
    </li>
  ));

  return (
    <div className="FilterCard" style={filterCard}>
      <header style={header}>
        <h3 style={cardTitle}>{props.title}</h3>
        <i className="material-icons" style={moreIcon}>more_vert</i>
      </header>
      <div className="content">{tasksList}</div>
    </div>
  );
}

const filterCard = {
  padding: "0.5em 1.5em 2em 1.5em",
  minWidth: "15em",
  gap: "1em",
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
}

const moreIcon = {
  fontSize: "1.75em",
  color: "#ffffff00",
  cursor: "pointer",
  borderRadius: "2em",
}

const taskStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "1em",
  margin: "0.5em 0em",
}