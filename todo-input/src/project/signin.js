import React, { Component } from 'react';

class signin extends Component {

    handleSumbit = (e) => {
        e.preventDefault();
        this.props.history.push('/dashboard')
    }

    handleRegister = () => {
        this.props.history.push('/signup')
    }

    render() {
        return (
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-5 m-auto shadow p-4'>
                        <form onSubmit={this.handleSumbit}>
                            <h3 className='text-center text-primary'>Signin Page</h3>
                            <input className='form-control mb-3 mt-3' type='email' placeholder='Enter your email' />
                            <input className='form-control' type='password' placeholder='Enter your password' />
                            <button className='btn btn-sm btn-primary mt-2 float-right'>submit</button>
                        </form>
                    </div>
                </div>
                <div className='text-center mt-3'>
                    <p className='text-info'>If you haven't register please register..!</p>
                    <button onClick={this.handleRegister} className='btn btn-sm btn-info'>signup</button>
                </div>
            </div>
        );
    }
}

export default signin;