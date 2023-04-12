import { proxy, useSnapshot } from 'valtio'

const state = proxy({
    tasks: [
        {id: 0, title:"Terminer l'exo de maths page 185", description:"", done:false},
        {id: 1, title:"Terminer le DM de physique pour mardi", description:"", done:false},
        {id: 2, title:"Réviser le chapitre sur l'évolution (SVT)", description:"", done:false},
        {id: 3, title:"Finir cette superbe app de Todo-list", description:"", done:false},
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
    ]
});

export const addNewTask = (title) => {
    state.tasks.push({id: state.tasks.length, title, description:"", done:false})
}

export const changeTaskStatus = (id) => {
    state.tasks[id].done = !state.tasks[id].done
}

export { state, useSnapshot }
