export function AddTodoMenu({ isEmpty, onChange, onAddClick, nextTodoContent, onEnterPress}){
    return (
        <div id='addTodoMenu'>
            <input 
            id='addTodoInput' 
            type='text' 
            placeholder='Add Todo Item' 
            onChange={onChange}
            onKeyDown={onEnterPress}
            value={nextTodoContent}/>
            <button 
            disabled={isEmpty ? true : false}
            onClick={onAddClick}
            >Add Todo</button>
        </div>
    )
}