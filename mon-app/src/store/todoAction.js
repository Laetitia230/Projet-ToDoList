import wait from "../wait";
import { ADD_TO_DO_ACTION, DELETE_TO_DO_ACTION, UPDATE_TO_DO_ACTION } from "./todoReducer";

export const toggleToDoAction = (todo) => ({
    type: UPDATE_TO_DO_ACTION,
    playload: {...todo, completed: !todo.completed}
})

export const deleteTodoAction = (todo) => ({
    type: DELETE_TO_DO_ACTION,
    playload: todo.id
})

export const addTodoAction = (title) => async (dispatch) => {
    await wait (1000)
    dispatch({
        type: ADD_TO_DO_ACTION,
        playload: {title}
    })
}