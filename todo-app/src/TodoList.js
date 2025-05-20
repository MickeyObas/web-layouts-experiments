import Todo from "./Todo"

function TodoList({ todos, handleDeleteClick, handleEditClick, isEditing, editId, handleSelect}){

    return (
        <ul>
            {todos.map((todo) => 
                <Todo 
                item={todo} 
                key={todo.id} 
                onEditClick={handleEditClick}
                onDeleteClick={handleDeleteClick}
                onSelect={handleSelect}
                isEditing={isEditing}
                editId={editId}
                />
            )}
        </ul>
    )
}

export default TodoList;