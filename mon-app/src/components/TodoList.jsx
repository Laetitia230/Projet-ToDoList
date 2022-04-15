import { connect, useDispatch,useSelector } from "react-redux"
import { useCallback } from "react"
import React from "react"
import { UPDATE_TO_DO_ACTION } from "../store/todoReducer"
import { filteredTodoSelector, todoSelector } from "../store/todoSelector"
import { deleteTodoAction, toggleToDoAction } from "../store/todoAction"

function TodoItem ({todo, onToggle, onDelete}){
    return <li className='noStyle'>
        <label className='position white'>
            <input type="checkbox" checked={todo.completed} onChange ={()=> onToggle(todo)}/>
            {todo.title}
            <button className="button white" onClick={() => onDelete(todo)}>X</button>
        </label>
    </li>

}
export function TodoList ({todos, onToggle, onDelete}){
    return <ul>
        {todos.map(todo => <TodoItem todo={todo} onToggle={onToggle} key={todo.id} onDelete={onDelete}/>)}
    </ul>
}
export function TodoListStore () {
    const todos = useSelector(filteredTodoSelector)
    const dispatch = useDispatch()
    const onToggle = useCallback(todo => {
        dispatch(toggleToDoAction(todo))
    }, [])
    const onDelete = useCallback(todo => {
        dispatch(deleteTodoAction(todo))
    }, [])
    return <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete}/>
}
/*
 export const TodoListStore = connect(
    (state) => ({
        todos: todoSelector(state)
    }),
    (dispatch) => ({
        onToggle: todo => dispatch(toggleToDoAction(todo))
    })
)(TodoList)*/
