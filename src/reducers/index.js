import {deleteItem, updateTodoList} from "./TodoListActions";

const reducer = (state, action) => {
    switch (action.type) {
        case 'updateTodoList':
            return updateTodoList(state, action);
        case 'deleteItem':
            return deleteItem(state, action);
        default:
            return state;
    }
};

export default reducer;