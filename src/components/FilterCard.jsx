import React from "react";
import Task from "./Task.jsx";
import NewTask from "./NewTask.jsx";
import { state } from "../store.js";
import { useSnapshot } from "valtio";

function convertRelativeDateToAbsoluteDate(deadline) {
  let days = parseInt(deadline.substring(2), 10);

  const date = new Date();

  if (deadline[1] == "-")
      days *= -1;

  date.setDate(date.getDate() + days);

  return date.toISOString().substring(0, 10);
}


export default function FilterCard(props) {
  const snap = useSnapshot(state);

  const filters = snap.sectionsCardFilter[props.sectionCardFilterId].cards[props.id].filterCriterias; 
  const sorts = snap.sectionsCardFilter[props.sectionCardFilterId].cards[props.id].sortCriterias; 

  const filterCompliantTasks = snap.tasks
  .filter((task) => {
    return (filters.done == undefined || task.done == filters.done);
  })
  .filter((task) => {
    return (filters.importance == undefined || task.importance === filters.importance);
  })
  .filter((task) => {
    if (filters.deadline == undefined)
      return true;

    if (filters.deadline.after != undefined) {
      const filterDate = convertRelativeDateToAbsoluteDate(filters.deadline.after);
      const taskDate = convertRelativeDateToAbsoluteDate(task.deadline);

      if (filterDate > taskDate)
        return false;
    }

    if (filters.deadline.before != undefined) {
      const filterDate = convertRelativeDateToAbsoluteDate(filters.deadline.before);
      const taskDate = convertRelativeDateToAbsoluteDate(task.deadline);

      if (filterDate < taskDate)
        return false;
    }

    return true;
  })
  .filter((task) => {
    return (filters.category == undefined || task.category === filters.category);
  })
  .filter((task) => {
    return (filters.title == undefined || task.title.includes(filters.title));
  })
  .filter((task) => {
    return (filters.description == undefined || task.description.includes(filters.description));
  })
  .sort((a, b) => {
    if (sorts.description == undefined || sorts.description == "asc")
      return a.description.localeCompare(b.description);
    else
      return b.description.localeCompare(a.description);
  })
  .sort((a, b) => {
    if (sorts.title == undefined || sorts.title == "asc")
      return a.title.localeCompare(b.title);
    else
      return b.title.localeCompare(a.title);
  })
  .sort((a, b) => {
    if (sorts.category == undefined || sorts.category == "asc")
      return a.category - b.category;
    else
      return b.category - a.category;
  })
  .sort((a, b) => {
    if (sorts.importance == undefined || sorts.importance == "asc")
      return a.importance - b.importance;
    else
      return b.importance - a.importance;
  })
  .sort((a, b) => {
    if (sorts.deadline == undefined || sorts.deadline == "asc")
      return a.deadline - b.deadline;
    else
      return b.deadline - a.deadline;
  })
  .sort((a, b) => {
    if (sorts.done == undefined || sorts.done == "asc")
      return a.done - b.done;
    else
      return b.done - a.done;
  });

    

  const tasksList = filterCompliantTasks.map((task, index) => (
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