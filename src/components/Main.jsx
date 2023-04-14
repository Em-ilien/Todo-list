import React from "react";
import SectionFilterCards from "./SectionFilterCards";

import { state } from "../store.js";
import { useSnapshot } from "valtio";

export default function Main(props) {
    const snap = useSnapshot(state);

    const sectionsList = snap.sectionsCardFilter.map((element) => element.title);

    const sections = sectionsList.map((element, index) => (
        <SectionFilterCards key={index} id={index} title={element} />
    ));

  return (
    <main className="Main" style={mainStyle}>
        <div className="plus-icon" style={plusIcon}>
            <i className="material-icons" style={{fontSize: "3em"}}>add</i>
        </div>
        <div className="filter-card-sections" style={filterCardSections}>
            {sections}
        </div>
    </main>
  );
}

const plusIcon = {
    color: "#fff",
    position: "fixed",
    right: "2em",
    bottom: "2em",
    height: "fit-content",
    width: "fit-content",
    padding: "0.5em",
    background: "#444248",
    boxShadow: "0px 0px 0.625em 0.25em #00000080",
    borderRadius: "5em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    zIndex: "1",
}

const filterCardSections = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "4em 0em",
    gap: "5em",
    margin: "0px 3em",
}

const mainStyle = {
    overflow: "scroll",
}