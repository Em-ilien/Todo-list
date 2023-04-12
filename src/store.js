import { proxy, useSnapshot } from 'valtio'

const state = proxy({ tasks: [
    {id: 0, title:"exo page 323", description:"", done:false},
    {id: 1, title:"exo page 323", description:"", done:false},
    {id: 2, title:"exodfg page 323", description:"", done:false},
    {id: 3, title:"exo page 323", description:"", done:false},
] });

export const changeTaskStatus = (id) => {
    state.tasks[id].done = !state.tasks[id].done
}

export { state, useSnapshot }
