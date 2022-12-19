function TodoList(props) {
    return (
    <div>
        <h3>{props.todo.title}</h3>
        <p>- {props.todo.list[0]}</p>
        <p>- {props.todo.list[1]}</p>
        <p>- {props.todo.list[2]}</p>
    </div>
)
}

export default TodoList;