import React from "react";
import FilterCard from "./FilterCard";

const filterCardsList = [
  {
    title: "Pour aujourd'hui",
    filterCriterias: {
      status: "all",
    },
  },
  {
    title: "Pour demain",
    filterCriterias: {
      status: "todo",
    },
  },
  {
    title: "Pour plus tard cette semaine",
    filterCriterias: {
      status: "inProgress",
    },
  },
  {
    title: "À long terme",
    filterCriterias: {
      status: "done",
    },
  },
];

export default function SectionFilterCards(props) {
  const filterCards = filterCardsList.map((element, index) => (
    <FilterCard key={index} title={element.title} filterCriterias={element.filterCriterias} sortCriterias={element.sortCriterias} />
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