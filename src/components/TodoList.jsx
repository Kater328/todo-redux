import React from "react";
import { connect } from "react-redux";
import { toggleTodo, destroyTodo, changeTodoTitle } from "../store/actions";
import TodoItem from "./TodoItem";
import ToggleCheckbox from "./ToggleCheckbox";
import { Filter } from "../utils/Enums";

class TodoList extends React.PureComponent {

    createTodoItem = (item) => {
        return(
            <TodoItem 
                key={item.id} 
                item={item} 
                toggleTodo={this.props.toggleTodo}
                destroyTodo={this.props.destroyTodo}
                changeTodoTitle={this.props.changeTodoTitle}
                />
        );
    }

    activateSelectedFilter = (todos) => {
        if (this.props.selectedFilter === Filter.all) {
            return (todos.map(item => this.createTodoItem(item)))
        } else if (this.props.selectedFilter === Filter.active) {
            return (todos.map( item => !item.completed ?
                this.createTodoItem(item) :'' ))          
        }else {
            return (todos.map( item => item.completed ?
                this.createTodoItem(item) :'' )) 
        }
    }

    render() {
        return(
            <section className="main" style={{display: "block"}}>
                <ToggleCheckbox 
                    // toggleAll={this.props.toggleAll} 
                    // checked={this.props.checkedAll}
                    />
                <label htmlFor="toggle-all">Mark all as complete</label>
				<ul className="todo-list">
                    {
                        this.activateSelectedFilter(this.props.todos)
                    }
                </ul>
			</section>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        todos: state.todos,
        selectedFilter: state.selectedFilter 
    };
}

const mapDispatchToProps = {
    toggleTodo,
    destroyTodo,
    changeTodoTitle
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);