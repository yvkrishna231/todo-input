import React, { Component } from 'react';
import './Todo.css';

class App extends Component {
    state = {
        input: '',
        todoInput: [],
        error: false,
        visible: false,
        editable: false,
        todoInputEdit: null,
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        if (this.state.editable && this.state.input) {
            this.setState(prevState => {
                prevState.todoInput[prevState.todoInputEdit] = prevState.input;
                return {
                    ...prevState,
                    visible: false,
                    editable: false,
                    todoInputEdit: null,
                    input: '',
                    error: true

                }
            })
        } else if (this.state.input === '') {
            this.setState({ error: true })
        } else if (this.state.todoInput.indexOf(this.state.input) > -1) {
            this.setState({ visible: true, input: '' })
        } else if (this.state.input) {
            this.setState({
                todoInput: this.state.todoInput.concat(this.state.input),
                error: false,
                input: '',
                visible: false,
            })
        }
    }
    handleOnChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleOnClickRemoveAll = () => {
        this.setState({ todoInput: [], input: '' })
    }
    handleRemoveTodoText = (ind) => {
        this.setState((prevState) => {
            const { todoInput } = prevState;
            todoInput.splice(ind, 1)
            return {
                ...prevState
            }
        })
    }
    handleOnClickEdit = (v, i) => {
        this.setState({ todoInputEdit: i, input: v, editable: true });
    }
    render() {
        return (
            <div className='mt-5'>
                <h2
                    className='text-center text-secondary'

                >Project Of Todo Data</h2>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5 col-sm-16 col-12 border shadow m-auto text-center p-3'>
                            <h4
                                className='text-info text-center'
                                style={{ textShadow: ' 1px 1px lightBlue' }}
                            >Please Enter Your Todo Text</h4>
                            <form onSubmit={this.handleOnSubmit}>
                                <input
                                    type='text'
                                    name='input'
                                    value={this.state.input}
                                    className='form-control text-primary'
                                    onChange={this.handleOnChange}
                                />
                                {this.state.editable ? <button
                                    className='float-right btn btn-sm btn-info mt-2'>
                                    update
                                    </button> : <button
                                        className='float-right btn btn-sm btn-success mt-2'>submit</button>}
                            </form>
                            <button onClick={this.handleOnClickRemoveAll} className='btn btn-sm btn-danger float-left mt-2'>remove all</button>
                            <div className='mt-3'>
                                {this.state.todoInput.length === 0 && <p className='text-danger'>No Todos Found</p>}
                                {this.state.error && <p className='text-danger text-center'>Enter some todo text</p>}
                                {this.state.visible && <p className='text-danger text-center'>Todo Input Already Exists</p>}
                            </div>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-lg-5 col-sm-12 col-12 m-auto'>
                            <ul className='list-group'>
                                {this.state.todoInput.map((val, ind) => {
                                    return (
                                        <li className='list-group-item text-warning'
                                            key={ind}
                                        >
                                            {val}
                                            <button
                                                className='btn btn-sm btn-danger float-right'
                                                onClick={() => this.handleRemoveTodoText(ind)}
                                            >
                                                Remove
                                            </button>
                                            <button
                                                className='btn btn-sm btn-info float-right mr-2'
                                                onClick={() => this.handleOnClickEdit(val, ind)}
                                            >
                                                edit
                                            </button>

                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
