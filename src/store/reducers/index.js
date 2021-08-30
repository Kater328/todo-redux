import { Filter } from "../../utils/Enums";

export const ACTION_CREATE = "CREATE";
export const ACTION_TOGGLE_TODO = "TOGGLE TODO";
export const ACTION_DESTROY_TODO = "DESTROY TODO";
export const ACTION_CHANGE_TITLE = "CHANGE TODO TITLE";
// export const ACTION_TOGGLE_ALL = "DECREMENT";
// export const ACTION_DESTROY_COMPLETED = "ADD";
// export const ACTION_UPDATE_CHECKED_ALL = "ADD";
// export const ACTION_CHANGE_FILTER = "ADD";

const initialState = {
    todos: [],
    checkedAll: false,
    selectedFilter: Filter.all
};

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ACTION_CREATE:
            return {...state, 
                todos: [
                    ...state.todos,
                    {
                        id: Date.now(), 
                        title: payload, 
                        completed: false
                    }
                ]
            };
        case ACTION_TOGGLE_TODO:
            return {...state, 
                todos: state.todos.map(
                    item =>
                      item.id === payload ?
                      {...item, completed: !item.completed} :
                      item
                )
            };
        case ACTION_DESTROY_TODO:
            return {...state, 
                todos: state.todos.filter(item => item.id !== payload)
            };        
        case ACTION_CHANGE_TITLE:
            return {...state, 
                todos: state.todos.map(
                    item =>
                      item.id === payload.id ?
                      {...item, title: payload.value} :
                      item
                )
            };
        default: 
            return state;
    }
}

export default reducer;