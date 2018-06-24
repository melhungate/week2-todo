import React from 'react';

const Todo = (props) => {
	const todo = props.todo;
	const i = props.index;
	const removeTodo = props.removeTodo;
	return (
		<li key={i}>
			{todo}
			<button onClick={() => removeTodo(i)}>
				Remove Todo
			</button> 
		</li>
		)
}

export default Todo;