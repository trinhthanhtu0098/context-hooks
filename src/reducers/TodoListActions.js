export const updateTodoList = (state, action) => {
    if (action.content === '') return state;
    let todoList = state.todoList;
    todoList.push({
        key: state.key,
        content: action.content
    });

    return {
        ...state,
        todoList: todoList,
        key: state.key + 1
    };
};

export const deleteItem = (state, action) => {
    const todoList = state.todoList;
    for (let i=0; i<todoList.length; i++) {
        if (todoList[i].key === action.key) {
            todoList.splice(i, 1);
            break;
        }
    }

    return {
        ...state,
        todoList: todoList,
    };
};