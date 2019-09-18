import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { toggleTodo, fetchData } from "../redux/actions";

class ListTodo extends Component {
    componentDidMount() {
        this.props.fetchData();
    }
    
    render() {
        console.log(this.props.todos.data, "todos");

        return (
            <ul>
                {Array.isArray(this.props.todos.data) &&
                    this.props.todos.data.map(todo => {
                        return (
                            <Todo
                                key={todo.id}
                                text={todo.title}
                                onDoubleClick={() => toggleTodo(todo.id)}
                            />
                        );
                    })}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);

    return {
        todos: state.todos
    };
};

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    fetchData: () => dispatch(fetchData())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListTodo);
