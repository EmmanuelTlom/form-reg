

const state = {
     tasks: [
         {
             id:1,
             name: 'hello'
         },
         {
             id:2,
             name: 'hi'
         }
     ]
}

const mutations = {
     updateStuff(state, payload){
         const hey = state.tasks.map(task=>{
            return task.id;
         })
        console.log(hey);
        console.log(payload.id);
        //  Object.assign(state[0].id, payload.id)
     }
}


const actions = {
    
    updateStuff({commit}, payload){
        console.log('first');
        console.log(payload);
        commit('updateStuff', payload)
    }
}

const getters = {
    tasks: (state) => {
        return state.tasks
    }
}


export default {
    state,
    mutations,
    actions,
    getters,
}

