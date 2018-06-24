import React from 'react';

const AddTodo = (props) => {
	const todo = props.todo;
	const handleChange = props.handleChange;
	const addTodo = props.addTodo;
	return (
		<div>
			<input 
				type="text" 
				placeholder="Add your todo" 
				name="todo" 
				onChange={handleChange}
				value={todo} //this takes a while to get. React needs to control the input
			/>
			<button onClick={addTodo}>Add Todo</button> 
		</div>
	)
}

export default AddTodo