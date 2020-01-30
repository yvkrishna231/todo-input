import React, { Component } from 'react'

export class Task1 extends Component {
    state = {
        text: '',
        text1: '',
        visible: false,
        error: false
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        if (this.state.text && this.state.text1 === this.state.text) {
            this.setState({ visible: !this.state.visible, error: false })
        } else {
            this.setState({ error: true, visible: true })
        }


    }
    handleOnChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }
    handleOnChange1 = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }
    render() {

        return (
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-8 col-sm-12 col-12 m-auto text-center shadow border p-3'>
                        <form onSubmit={this.handleOnSubmit}>
                            <label>Password :</label>
                            <input
                                type={this.state.visible ? 'text' : 'password'}
                                onChange={this.handleOnChange} name='text'
                                value={this.state.text} />&nbsp;
                            <label>conform Password :</label>
                            <input
                                type={this.state.visible ? 'text' : 'password'}
                                onChange={this.handleOnChange1} name='text1'
                                value={this.state.text1} />&nbsp;
                          <button className='btn btn-sm btn-info text-white mb-1'>
                                <i className={`fa ${this.state.visible ? "fa-eye" : "fa-eye-slash"}`}></i>
                            </button>
                        </form>
                        {this.state.error && <p className='text-danger'>Your password is no same</p>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Task1


