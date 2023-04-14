import React from "react";

import { useRoutes, Link, useQueryParams } from 'raviger'


export default function Header(props) {
  return (
    <header className="Header">
      <h1 onClick={() => {document.location="."}}>Todo-list webapp</h1>
      <nav>
        {/* TODO */}
      </nav>
      <div className="right-ctn">
        <div className="account">
            <span className="initials">
                EC
            </span>
        </div>
        <Link className="settings-icon-ctn" href="/settings">
          <i className="material-icons">settings</i>
        </Link>
      </div>
    </header>
  );
}

