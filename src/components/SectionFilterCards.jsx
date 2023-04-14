import React from "react";
import FilterCard from "./FilterCard";
import { state } from "../store.js";
import { useSnapshot } from "valtio";

export default function SectionFilterCards(props) {
  const snap = useSnapshot(state);
  const filterCardsList = snap.sectionsCardFilter;

  const filterCards = filterCardsList[props.id].cards.map((element, index) => (
    <FilterCard key={index} id={index} title={element.title} sectionCardFilterId={props.id} />
  ));

  return (
    <div className="SectionFilterCards" style={sectionFilterCards}>
      <h2 style={sectionTitle}>{props.title}</h2>
      <div className="filter-cards" style={filterCardsStyle}>
        {filterCards}
      </div>
    </div>
  );
}

const sectionFilterCards = {
  padding: "0 4em 0 0",
}

const sectionTitle = {
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "1.6em",
  color: "#fff",
  margin: "0.625em 0em",
}

const filterCardsStyle = {
  display: "flex",
  flexDirection: "row",
  gap: "3em",
  margin: "0 1em",
}