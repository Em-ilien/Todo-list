import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import TaskContextMenu from "./components/TaskContextMenu";
// import FilterContextMenu from "./components/FilterContextMenu";

import { state, hideContextMenu } from "./store.js";
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

  function closeContextMenu() {
    hideContextMenu();
  }

  return (
    <div className="App">
      <div onClickCapture={closeContextMenu}>
        <Header />
        <Main />
      </div>
      {contextMenu}
    </div>
  );
}

export default App;
