import React from "react";
import Task from "./Task";

export default function List(props) {
  const items = props.todoList.map((element, index) => (
    <li key={index}>
      <Task index={index} task={element} changeDone={props.changeDone}/>
    </li>
  ));

  return (
    <div className="List">
      <h3>The list ({props.todoList.length})</h3>
      <ol>{items}</ol>
    </div>
  );
}
