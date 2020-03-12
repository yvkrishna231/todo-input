import React from 'react';
import uuid from 'uuid/v4';
import '../App.css';

class App extends React.Component {
    state = {
        input: '',
        todoData: [],
        del: false,
        todoEdit: [],
        editable: true
    }

    FormSubmit = (e) => {
        e.preventDefault();
        const todo = {
            id: uuid(),
            message: this.state.input,
            completed: false
        }
        this.setState({
            todoData: this.state.todoData.concat(todo),
            input: ''
        })
    }

    handleRemoveTodo = (id) => {
        this.setState({ todoData: this.state.todoData.filter(todo => todo.id !== id) })
    }

    inputOnChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleCheckBox = (e, id) => {
        const check = e.target.checked;
        this.setState(prevState => {
            const todos = [...prevState.todoData];
            // const index = todos.findIndex(todo => todo.id === id);
            todos[id].completed = check;
            return {
                ...prevState,
                todoData: todos
            }
        });
    }

    render() {
        const { input, todoData } = this.state;
        return (
            <div className='container mt-2 todo_app'>
                <div className='row'>
                    <div className='col-lg-5 m-auto p-4'>
                        <form onSubmit={this.FormSubmit}>
                            <h1 id='formH1'>todos</h1>
                            <input
                                value={input}
                                onChange={this.inputOnChange}
                                name='input'
                                placeholder='What needs to be done ?'
                                id='formInput'
                                className='form-control'
                            />
                        </form>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-5 m-auto'>
                        <ul className='list-group'>
                            {todoData && todoData.map((val, ind) => {
                                return (
                                    <React.Fragment key={ind}>
                                        <li id='listedItems' className='list-group-item'>
                                            <span className={val.completed ? 'completed' : ''}>{val.message}</span>
                                            <i
                                                onClick={() => this.handleRemoveTodo(val.id)}
                                                id='mapremoveclass'
                                                className="fa fa-times float-right mt-1 text-danger"
                                                aria-hidden="true"></i>
                                            <input
                                                onChange={(e) => this.handleCheckBox(e, ind)}
                                                id='mapcheckbox'
                                                className='float-left mt-2 mr-2'
                                                type='checkbox' />
                                        </li>
                                    </React.Fragment>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;



