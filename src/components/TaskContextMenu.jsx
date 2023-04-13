import React from "react";

import { state, changeTaskProperty } from "../store.js";
import { useSnapshot } from "valtio";

export default function TaskContextMenu(props) {
    const snap = useSnapshot(state);

    const task = snap.tasks.find(task => task.id === snap.contextMenuTaskId);

    const categories = ["Aucune", "Travail", "Perso"].map((element, index) => (
        <option key={index} value={element} selected={(task.category == element)}>{element}</option>
    ));
    const importances = ["Facultative", "Obligatoire", "Capitale"].map((element, index) => (
        <option key={index} value={element} selected={(task.importance == element)}>{element}</option>
    ));

    function onFieldChange(e) {
        changeTaskProperty(task.id, e.target.name, e.target.value);
    }

    return (
        <aside className="Task ContextMenu" style={contextMenu}>
            <h1 style={title}>Détails de la tâche</h1>
            <div style={fieldsCtn} onChange={onFieldChange}>
                <label style={label}>
                    <span style={labelSpan}>Titre</span>
                    <input style={input} type="text" name="title" value={task.title} />
                </label>
                <label style={label}>
                    <span style={labelSpan}>Description</span>
                    <textarea style={input} name="description" value={task.description} />
                </label>
                <label style={label}>
                    <span style={labelSpan}>Catégorie</span>
                    <select style={input} name="category">
                        {categories}
                    </select>
                </label>
                <label style={label}>
                    <span style={labelSpan}>Échéance</span>
                    <input style={input} type="date" name="deadline" value={task.deadline} />
                </label>
                <label style={label}>
                    <span style={labelSpan}>Statut</span>
                    <select style={input} name="done">
                        <option value="false" selected={!task.done}>À faire</option>
                        <option value="true" selected={task.done}>Terminée</option>
                    </select>
                </label>
                <label style={label}>
                    <span style={labelSpan}>Importance</span>
                    <select style={input} name="importance">
                        {importances}
                    </select>
                </label>
            </div>
        </aside>
    );
}

const contextMenu = {
    boxShadow: "0px 0px 10px 7px rgba(0, 0, 0, 0.3)",
    padding: "0 1.5em",
    background: "#444248",
    zIndex: 2,
}

const title = {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "24px",
    color: "#fff",
    whiteSpace: "nowrap",
    marginBottom: "2em",
}

const fieldsCtn = {
    display: "flex",
    flexDirection: "column",
    gap: "1.5em",
}

const label = {
    display: "flex",
    flexDirection: "column",
    gap: "0.25em",
}

const labelSpan = {
    marginLeft: "0.5em",
    fontSize: "0.85em",
}

const input = {
    background: "#59565f",
    outline: "none",
    border: "none",
    boxShadow: "none",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "1em",
    lineHeight: "24px",
    color: "#fff",
    padding: "0.5em 0.75em",
    borderRadius: "0.75em",
}