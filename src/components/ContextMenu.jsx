import React from "react";


export default function ContextMenu(props) {
    function getTaskContextMenu() {
        return (
            <div className="Task ContextMenu">
                <h1>Détails de la tâche</h1>
                <div>
                    {/* TODO */}
                </div>
            </div>
        );
    }

    function getFilterContextMenu() {
        return (
            <div className="Filter ContextMenu">
                <h1>Détails du filtre</h1>
                <div>
                    {/* TODO */}
                </div>
            </div>
        );
    }

    function getContextMenu() {
        switch (props.type) {
            case "task":
                return getTaskContextMenu();
            case "filter":
                return getFilterContextMenu();
            default:
                return;
        }
    }
    
    return (
    <aside className="ContextMenu">
        {getContextMenu()}
    </aside>
    );
}