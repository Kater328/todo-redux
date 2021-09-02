import React from "react";
import FooterButton from "./FooterButton";
import { Filter } from "../utils/Enums";
import { connect } from "react-redux";
import { changeFilter, destroyCompleted } from "../store/actions";

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.filterConfig =[
            {id: Filter.all, title: 'All'},
            {id: Filter.active, title: 'Active'},
            {id: Filter.completed, title: 'Completed'}
        ]
    }

    render() {
        return (
            <footer className="footer" display="block;">
            <span 
                className="todo-count">
                    <strong>
                        {(this.props.todos.filter(item => !item.completed)).length}
                    </strong> items left
            </span>
            <ul className="filters">
                {
                    this.filterConfig.map(
                        item =>
                        <FooterButton
                            key={item.id}
                            onClick={this.props.changeFilter}
                            isActive={this.props.selectedFilter === item.id}
                            item={item} 
                        />
                    )
                }
            </ul>
            {
                (this.props.todos.some(item => item.completed)) && (
                <button 
                    className="clear-completed" 
                    display="block"
                    onClick={this.props.destroyCompleted}>
                        Clear completed
                </button>
                )
            }
          </footer>
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
    changeFilter,
    destroyCompleted
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);