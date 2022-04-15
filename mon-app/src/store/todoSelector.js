export const  todoSelector =({todos}) => todos

export const filteredTodoSelector = ({todos, filter}) => {
    if (filter == null) {
        return todos
    }
    return todos.filter(todo => todo.completed == filter)
}