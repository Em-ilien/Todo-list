import React from "react";

export default function FilterCard(props) {
  return (
    <div className="FilterCard" style={filterCard}>
        <h3>{props.title}</h3>
    </div>
  );
}

const filterCard = {
}