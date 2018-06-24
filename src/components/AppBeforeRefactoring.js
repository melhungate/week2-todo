import React, { Component } from 'react'
/*
1. As a user, I want to e able to see a list of todos
	-Store a list of todos in state (constructor)
	-Display our list of todos (render)
2. As a user, I want to be able to add a todo
	-Add Input field where the user can type their new todo
	-A button that will add the todo to state
	-Track the input
	-Clear the input
3. As a user, I want to be able to remove a todo
	-Button which says Remove Todo
	-When you click the button, we'll remove the todo
	-Splice out the todo by its index
*/
class App extends Component {
	/* 
	constructor() { //This is more common 
		super();
		this.state = {
			todos: []
		}
	}
	*/

	state = { //Stage 2 adoption in react
		todo: '',
		todos: ['walk the dog']
	}

	addTodo = () => {
		const todo = this.state.todo;
		const todos = this.state.todos;
		/*
		const { todos, todo } = this.state;
		const otherThing = this.state.otherThing;
		const { todo, otherThing } = this.state //destructuring 
		this.state.todos.push(todo); //should never directly mutate state. Need to use setState
		//functional purity: given a particular input, it should always produce the same output */
		const nextTodos = [...todos, todo] //to clone an array. this is called spread
		/*
		const nextTodos = Array.from(this.state.todos) //create a clone
		const clonedState = JSON.parse(JSON.stringify(this.state));
		*/

		this.setState({
			todos: nextTodos,
			todo: ''
		})

	}
	removeTodo = (index) => {
		const nextTodos = Array.from(this.state.todos);
		nextTodos.splice(index, 1)
		this.setState({
			todos: nextTodos
		})

	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value //ES6 Computed Properties 
		});
		console.log(e.target.value);
	}

	render() {
		return (
			<div>
				<h1>Todo App</h1>
				<div>
					<input 
						type="text" 
						placeholder="Add your todo" 
						name="todo" 
						onChange={this.handleChange}
						value={this.state.todo} //this takes a while to get. React needs to control the input
					/>
					<button onClick={this.addTodo}>Add Todo</button> 
				</div>
				<ul>
					{this.state.todos.map((todo,i)=> {
						return (
							<li key={i}>
								{todo}
								<button onClick={() => this.removeTodo(i)}>
									Remove Todo
								</button> 
							</li>
						)
					})}
				</ul>
			</div>

		)
	}
}

export default App;