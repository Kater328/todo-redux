import { Filter } from "../../utils/Enums";

export const ACTION_CREATE = "CREATE";
export const ACTION_TOGGLE_TODO = "TOGGLE TODO";
export const ACTION_DESTROY_TODO = "DESTROY TODO";
export const ACTION_CHANGE_TITLE = "CHANGE TODO TITLE";
export const ACTION_CHANGE_FILTER = "CHANGE FILTER";
export const ACTION_DESTROY_COMPLETED = "DESTROY COMPLETED";
export const ACTION_TOGGLE_ALL = "TOGGLE ALL";

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
            let newState = {...state, 
                todos: state.todos.map(
                    item =>
                      item.id === payload ?
                      {...item, completed: !item.completed} :
                      item
                )
            };
            let newCheckedAll = updateCheckedAll(newState.todos);
            return {...newState,
                checkedAll: newCheckedAll
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
        case ACTION_CHANGE_FILTER:
            return {...state, 
                selectedFilter: payload
            };        
        case ACTION_DESTROY_COMPLETED:
            return {...state, 
                todos: state.todos.filter(item => !item.completed),
                checkedAll: false
            };        
        case ACTION_TOGGLE_ALL:
            return {...state, 
                todos: state.todos.map(
                    item => ({...item, completed: !state.checkedAll})
                ),
                checkedAll: !state.checkedAll
            };
        default: 
            return state;
    }
}

const updateCheckedAll = (todos) => {
    if(todos.every(item => item.completed)) return true;
    return false;
}

export default reducer;