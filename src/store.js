import { proxy, useSnapshot } from 'valtio'

const state = proxy({
    tasks: [
        {id: 0, title:"Terminer l'exo de maths page 185", description:"cc", category:"Aucune", deadline:"J+0", done:false, importance: "Obligatoire"},
        {id: 1, title:"Terminer le DM de physique pour mardi", description:"", category:"Aucune", deadline:"J+1", done:true, importance: "Facultative"},
        {id: 2, title:"Réviser le chapitre sur l'évolution (SVT)", description:"", category:"Travail", deadline:"J+5", done:false, importance: "Obigatoire"},
        {id: 3, title:"Finir cette superbe app de Todo-list", description:"", category:"Aucune", deadline:"J+0", done:false, importance: "Capitale"},
        {id: 4, title:"Apprendre une nouvelle langue, l'anglais", description:"", category:"Perso", deadline:"J+365", done:false, importance: "Facultative"},
    ],
    sectionsCardFilter: [
        {
            title: "Chronologiquement",
            cards: [
            {
                title: "Pour aujourd'hui",
                filterCriterias: {
                    deadline: {before: "J+0"},
                },
                sortCriterias: {
                    done: "asc",
                }
            },
            {
                title: "Pour demain",
                filterCriterias: {
                    deadline: {after: "J+1", before: "J+1"},
                },
                sortCriterias: {
                    done: "asc",
                }
            },
            {
                title: "Pour plus tard cette semaine",
                filterCriterias: {
                    deadline: {after: "J+2", before: "J+7"},
                },
                sortCriterias: {
                    done: "asc",
                }
            },
            {
                title: "À long terme",
                filterCriterias: {
                    deadline: {after: "J+8"},
                },
                sortCriterias: {
                    done: "asc",
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

export const deleteTask = (id) => {
    state.tasks.splice(id, 1);
    state.tasks.forEach((task, index) => {
        task.id = index;
    });
}

export const changeTaskStatus = (id) => {
    state.tasks[id].done = !state.tasks[id].done
}

export const changeTaskProperty = (id, property, value) => {
    if (property === "deadline") {
        const date = new Date(value);
        const currentDate = new Date();

        let daysBetween = (date.getTime() - currentDate.getTime()) / 1000 / 60 / 60 / 24;
        daysBetween = Math.round(daysBetween);

        console.log(daysBetween);

        if (daysBetween > 0)
        state.tasks[id][property] = "J+" + daysBetween;
        else
        state.tasks[id][property] = "J-" + daysBetween;
        
        return;
    }

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
