import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import { connect } from "react-redux";

function App (props) {
  return (
      <div className="todoapp">
        <Header />
        <TodoList />
        {
          (props.todos.length > 0) && 
          <Footer />
        }
      </div>
  );
}

const mapStateToProps = (state) => {
  return { 
      todos: state.todos
  };
}

export default connect(mapStateToProps)(App);