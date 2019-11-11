import React, { Component } from 'react'

class App extends Component {
    state = {
        input: '',
        todoInput: [],
        error: false,
        visible: false
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        if (this.state.input === '') {
            this.setState({ error: true })
        } else if (this.state.todoInput.indexOf(this.state.input) > -1) {
            this.setState({ visible: true })
        } else {
            this.setState({
                todoInput: this.state.todoInput.concat(this.state.input),
                error: false,
                input: '',
                visible: false,
            })
        }
    }
    handleOnChange = (e) => {
        this.setState({ input: e.target.value })
    }
    handleOnClickRemoveAll = () => {
        this.setState({ todoInput: [] })
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
                                    value={this.state.input}
                                    className='form-control text-primary'
                                    onChange={this.handleOnChange}
                                />
                                <button className='btn btn-sm btn-success mt-3 float-right'>Add</button>
                            </form>
                            <button
                                onClick={this.handleOnClickRemoveAll}
                                className='btn btn-sm btn-danger mt-3 float-left'>RemoveAll</button>
                            <div className='mt-3'>
                                {this.state.todoInput.length === 0 && <p className='text-danger'>No Todos Found</p>}
                                {this.state.error && <p className='text-danger'>Enter some todo text</p>}
                                {this.state.visible && <p className='text-danger'>Todo Input Already Exists</p>}
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
                                            <botton
                                                className='btn btn-sm btn-danger float-right'
                                                onClick={() => this.handleRemoveTodoText(ind)}
                                            >
                                                Remove
                                            </botton>
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
