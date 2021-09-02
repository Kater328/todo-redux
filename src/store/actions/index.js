import {
        ACTION_CREATE, 
        ACTION_TOGGLE_TODO, 
        ACTION_DESTROY_TODO, 
        ACTION_CHANGE_TITLE, 
        ACTION_CHANGE_FILTER, 
        ACTION_DESTROY_COMPLETED, 
        ACTION_TOGGLE_ALL
    } from "../reducers";

export const create = (payload) => ({type: ACTION_CREATE, payload});

export const toggleTodo = (payload) => ({type: ACTION_TOGGLE_TODO, payload});

export const destroyTodo = (payload) => ({type: ACTION_DESTROY_TODO, payload});

export const changeTodoTitle = (payload) => ({type: ACTION_CHANGE_TITLE, payload});

export const changeFilter = (payload) => ({type: ACTION_CHANGE_FILTER, payload});

export const destroyCompleted = () => ({type: ACTION_DESTROY_COMPLETED});

export const toggleAll = () => ({type: ACTION_TOGGLE_ALL});