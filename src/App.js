import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";

function App() {
    return (
        <Provider store={store}>
            <div
                style={{
                    textAlign: "center",
                    margin: "100px 300px"
                }}
            >
                <AddTodo />
                <ListTodo />
            </div>
        </Provider>
    );
}

export default App;
