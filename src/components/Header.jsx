import React from "react";

export default function Header(props) {
  return (
    <header className="Header">
      <h1>Todo-list webapp</h1>
      <nav>
        {/* TODO */}
      </nav>
      <div className="right-ctn">
        <div className="account">
            <span className="initials">
                EC
            </span>
        </div>
        <div className="settings-icon-ctn">
          <i className="material-icons">settings</i>
        </div>
      </div>
    </header>
  );
}

