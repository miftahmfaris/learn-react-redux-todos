import {
    ADD_TODO,
    LIST_TODO,
    TOGGLE_TODO,
    FETCH_DATA_SUCCESS
} from "../actions";

let nextTodo = 0;

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            return [...action.payload.data];
        case ADD_TODO:
            return [
                ...state,
                { id: nextTodo++, title: action.text, completed: false }
            ];
        case LIST_TODO:
            return [...state];
        case TOGGLE_TODO:
            return state.map(todo =>
                todo.id === action.id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );

        default:
            return state;
    }
};
