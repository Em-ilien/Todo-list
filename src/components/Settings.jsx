import React, { useState } from "react";

import { state } from "../store.js";
import { useSnapshot } from "valtio";

function Settings() {
  const snap = useSnapshot(state);

  return (
    <div className="Settings">
      <p>Settings</p>
    </div>
  );
}

export default Settings;
