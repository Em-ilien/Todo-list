import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import TaskContextMenu from "./components/TaskContextMenu";
// import FilterContextMenu from "./components/FilterContextMenu";

import { state } from "./store.js";
import { useSnapshot } from "valtio";


import "./App.css";

function App() {
  const snap = useSnapshot(state);

  function getContextMenu() {
    switch (snap.contextMenuType) {
      case "task":
        return (
          <TaskContextMenu />
        );
      case "filter":
        return (
          <FilterContextMenu />
        )
      default:
        return;
    }
  }

  const contextMenu = getContextMenu();

  return (
    <div className="App">
      <div>
        <Header />
        <Main />
      </div>
      {contextMenu}
    </div>
  );
}

export default App;
