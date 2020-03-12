import React, { Component } from 'react';

class Dashboard extends Component {
    handleSignIn = () => {
        this.props.history.push('/signin')
    }

    handleSignUp = () => {
        this.props.history.push('/signup')
    }
    render() {
        return (
            <div className='mt-5 text-center'>
                <button className='btn btn-sm btn-primary mr-3' onClick={this.handleSignIn}>signin</button>
                <button className='btn btn-sm btn-info' onClick={this.handleSignUp}>signUp</button>
            </div>
        );
    }
}

export default Dashboard;