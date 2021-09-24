const initialState = {
    projects:[],
    loading: false
}

interface ProjectReducerTypes  {
    projects: string[],
    loading: boolean,
   
}

interface Action {
    type: any
} 


const projectsReducer =  (state:ProjectReducerTypes = initialState, action:Action)=> {
 switch(action.type) {
     default: return state
 }
}

export default projectsReducer