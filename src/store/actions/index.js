import {ACTION_CREATE, ACTION_TOGGLE_TODO, ACTION_DESTROY_TODO, ACTION_CHANGE_TITLE} from "../reducers";

export const create = (payload) => ({type: ACTION_CREATE, payload});

export const toggleTodo = (payload) => ({type: ACTION_TOGGLE_TODO, payload});

export const destroyTodo = (payload) => ({type: ACTION_DESTROY_TODO, payload});

export const changeTodoTitle = (payload) => ({type: ACTION_CHANGE_TITLE, payload});