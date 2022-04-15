let id = 2;
const initialState = [
    
]
export const ADD_TO_DO_ACTION = 'ADD_TO_DO_ACTION'
export const UPDATE_TO_DO_ACTION = 'UPDATE_TO_DO_ACTION'
export const DELETE_TO_DO_ACTION = 'DELETE_TO_DO_ACTION'

export function todoReducer (state = initialState, action){
    switch (action.type) {
        case ADD_TO_DO_ACTION:
            return [...state, {id: ++id, completed: false, ...action.playload}]
        case UPDATE_TO_DO_ACTION:
            return state.map(todo => {
                if (todo.id== action.playload.id){
                    return {...todo, ...action.playload}
                } else {
                    return todo
                }
            })
            case DELETE_TO_DO_ACTION:
                return state.filter(todo => todo.id != action.playload)
                default:
                return state
                    
                
           
    }

}