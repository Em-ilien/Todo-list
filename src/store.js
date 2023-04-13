import { proxy, useSnapshot } from 'valtio'

const state = proxy({
    tasks: [
        {id: 0, title:"Terminer l'exo de maths page 185", description:"cc", category:"Aucune", deadline:"2023-04-13", done:false, importance: "Obligatoire"},
        {id: 1, title:"Terminer le DM de physique pour mardi", description:"", category:"Aucune", deadline:"2023-04-15", done:false, importance: "Facultative"},
        {id: 2, title:"Réviser le chapitre sur l'évolution (SVT)", description:"", category:"Travail", deadline:"2023-04-15", done:false, importance: "Obigatoire"},
        {id: 3, title:"Finir cette superbe app de Todo-list", description:"", category:"Aucune", deadline:"2023-04-13", done:false, importance: "Capitale"},
    ],
    sectionscardfilter: [
        {
            title: "Chronologiquement",
            cards: [
            {
                title: "Pour aujourd'hui",
                filterCriterias: {
                    status: "all",
                    date: "J+0",
                },
                sortCriterias: {
                    status: "asc",
                }
            },
            {
                title: "Pour demain",
                filterCriterias: {
                    status: "all",
                    date: "J+1",
                },
                sortCriterias: {
                    status: "asc",
                }
            },
            {
                title: "Pour plus tard cette semaine",
                filterCriterias: {
                    status: "all",
                    date: {after: "J+2", before: "J+7"},
                },
                sortCriterias: {
                    status: "asc",
                }
            },
            {
                title: "À long terme",
                filterCriterias: {
                    status: "all",
                    date: {after: "J+8"},
                },
                sortCriterias: {
                    status: "asc",
                }
            },

        ]},
        {
            title: "Thématiquement",
            cards: [
                
        ]},
        {
            title: "Toutes les tâches",
            cards: [

        ]},
    ],
});

export const addNewTask = (title) => {
    const id = state.tasks.length;
    state.tasks.push({id: id, title, description:"", category:"Aucune", deadline:"2023-04-13", done:false, importance: "Obligatoire"});
    return id;
}

export const changeTaskStatus = (id) => {
    state.tasks[id].done = !state.tasks[id].done
}

export const changeTaskProperty = (id, property, value) => {
    state.tasks[id][property] = value;
}

export const showTaskContextMenu = (id) => {
    state.contextMenuType = "task";
    state.contextMenuTaskId = id;
}

export const hideContextMenu = () => {
    state.contextMenuType = null;
    state.contextMenuTaskId = null;
}

export { state, useSnapshot }
