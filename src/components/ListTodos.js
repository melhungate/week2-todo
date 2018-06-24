import React from 'react';
import Todo from './Todo';

const ListTodos = (props) => {
	const todos = props.todos;
	const removeTodo = props.removeTodo;
	return (
		<ul>
			{todos.map((todo,i)=> {
				return (
					<Todo todo={todo} index={i} removeTodo={removeTodo} key={i}/>
				)
			})}
		</ul>
	);
}

export default ListTodos;