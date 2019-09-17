import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { toggleTodo } from "../redux/actions";

const TodoList = ({ todos, toggleTodo }) => (
    <ul>
        {todos.map(todo => {
            return (
                <Todo
                    key={todo.id}
                    {...todo}
                    onDoubleClick={() => toggleTodo(todo.id)}
                />
            );
        })}
    </ul>
);

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
