import React from "react";

const Todo = ({ onDoubleClick, completed, text }) => (
    <li
        onDoubleClick={onDoubleClick}
        style={{
            textDecoration: completed ? "line-through" : "none",
            textAlign: "left"
        }}
    >
        {text}
    </li>
);
export default Todo;
