import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import TaskContextMenu from "./TaskContextMenu";
// import FilterContextMenu from "./FilterContextMenu";

import { state, hideContextMenu } from "../store.js";
import { useSnapshot } from "valtio";

function Todolist() {
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
    <div className="Todolist">
      <div onClickCapture={closeContextMenu}>
        <Header />
        <Main />
      </div>
      {contextMenu}
    </div>
  );
}

export default Todolist;
