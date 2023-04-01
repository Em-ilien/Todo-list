import React from 'react';

export default function Task(props) {
  function onChange(event) {
    props.changeDone(props.index);
    event.target.parentElement.querySelector("label").className = event.target.checked ? "done" : "";
  }

  return (
    <div className="Task">
      <input id={props.index} onChange={onChange}
        type="checkbox" defaultChecked={props.task.done} />
      <label htmlFor={props.index}>{props.task.text}</label>
    </div>
  );
}