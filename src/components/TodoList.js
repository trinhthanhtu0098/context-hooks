import React from 'react';
import {getState} from "../StateManagement";
import {DELETE_TODO_ITEM} from "../reducers";

const TodoList = () => {
    const [{todoList}, dispatch] = getState();

    return (
        <div>
            {todoList.map(item => (
                <div key={item.key}>{item.key} - {item.content}
                    <button onClick={() => {
                        dispatch({
                            type: DELETE_TODO_ITEM,
                            key: item.key
                        })
                    }}>Delete
                    </button>
                </div>
            ))}
        </div>
    )
};

export default TodoList;