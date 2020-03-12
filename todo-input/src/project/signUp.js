import React, { Component } from 'react';

class signUp extends Component {

    handleSumbit = (e) => {
        e.preventDefault();
        this.props.history.push('/signin')
    }

    handleRegister = () => {
        this.props.history.push('/signin')
    }

    render() {
        return (
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-5 m-auto shadow p-4'>
                        <form onSubmit={this.handleSumbit}>
                            <h3 className='text-center text-primary'>SignUp Page</h3>
                            <input className='form-control mb-3 mt-3' type='text' placeholder='Enter your UserName' />
                            <input className='form-control mb-3 mt-3' type='email' placeholder='Enter your email' />
                            <input className='form-control' type='password' placeholder='Enter your password' />
                            <button className='btn btn-sm btn-primary mt-2 float-right'>submit</button>
                        </form>
                    </div>
                </div>
                <div className='text-center mt-3'>
                    <p className='text-info'>If you already register please signin...!</p>
                    <button onClick={this.handleRegister} className='btn btn-sm btn-info'>signin</button>
                </div>
            </div>
        );
    }
}

export default signUp;