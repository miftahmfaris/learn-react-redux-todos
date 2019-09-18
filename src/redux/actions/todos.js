import axios from "axios";

export const ADD_TODO = "ADD_TODO";
export const LIST_TODO = "LIST_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const FETCH_DATA_BEGIN = "FETCH_DATA_BEGIN";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILED = "FETCH_DATA_FAILED";

const API_URL = process.env.REACT_APP_API_URL;

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

const fetchDataBegin = () => {
    return {
        type: FETCH_DATA_BEGIN
    };
};

const fetchDataSuccess = payload => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload
    };
};

const fetchDataFailed = () => {
    return {
        type: FETCH_DATA_FAILED
    };
};

export const fetchData = () => {
    return dispatch => {
        dispatch(fetchDataBegin());

        axios
            .get(API_URL)
            .then(result => {
                dispatch(fetchDataSuccess(result));
            })
            .catch(error => dispatch(fetchDataFailed(error)));
    };
};
