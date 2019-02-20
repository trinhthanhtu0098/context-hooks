import {deleteItem, updateTodoList} from "./TodoListActions";

export const UPDATE_TODO_LIST = 'updateTodoList';
export const DELETE_TODO_ITEM = 'deleteTodoItem';

const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_TODO_LIST:
            return updateTodoList(state, action);

        case DELETE_TODO_ITEM:
            return deleteItem(state, action);

        default:
            return state;
    }
};

export default reducer;