import React, { useState } from "react";
import AddTask from "./components/AddTask";
import List from "./components/List";
import Header from "./components/Header";
import Main from "./components/Main";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(text) {
    const task = {
      text,
      done: false
    };
    setTasks([...tasks, task]);
  }

  // changer le status du todo
  function changeDone(index) {
    const newTasks = [...tasks]; // copie du tableau
    newTasks[index] = { ...newTasks[index], done: !newTasks[index].done };
    setTasks(newTasks);
  }

  return (
    <div className="App">
      <Header />
      <Main />
      {/* <List todoList={tasks} changeDone={changeDone} /> */}
      {/* <AddTask addTask={addTask}/> */}
    </div>
  );
}

export default App;
