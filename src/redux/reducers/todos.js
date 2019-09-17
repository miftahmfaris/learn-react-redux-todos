import { ADD_TODO, LIST_TODO, TOGGLE_TODO } from "../actions";

let nextTodo = 0;

export default (state = [], action) => {
    console.log(state);

    console.log(action.id, "State");

    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                { id: nextTodo++, text: action.text, completed: false }
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
