export const ADD_TODO = "ADD_TODO";
export const LIST_TODO = "LIST_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const addTodo = text => {
    return {
        type: ADD_TODO,
        text
    };
};

export const listTodo = () => {
    return {
        type: LIST_TODO
    };
};

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});
