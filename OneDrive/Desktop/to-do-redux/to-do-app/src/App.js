import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
	return (
		<div className="app">
    <div className="to-do-container">
        <h1 className="app-title">To-do App</h1>
        <AddTodo />
        <TodoList />
      </div>
		</div>
	);
};

export default App;
