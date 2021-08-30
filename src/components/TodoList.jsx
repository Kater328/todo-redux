import React from "react";
import { connect } from "react-redux";
import { toggleTodo, destroyTodo, changeTodoTitle } from "../store/actions";
import TodoItem from "./TodoItem";
import ToggleCheckbox from "./ToggleCheckbox";

class TodoList extends React.PureComponent {

    createTodoItem = (item) => {
        return(
            <TodoItem 
                key={item.id} 
                item={item} 
                toggleTodo={this.props.toggleTodo}
                destroyTodo={this.props.destroyTodo}
                // toggleAll={this.props.toggleAll}
                changeTodoTitle={this.props.changeTodoTitle}
                />
        );
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
                        this.props.todos.map(item => this.createTodoItem(item))
                    }
                </ul>
			</section>
        );
    }
}

const mapStateToProps = (state) => {
    return { todos: state.todos };
}

const mapDispatchToProps = {
    toggleTodo,
    destroyTodo,
    changeTodoTitle
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);