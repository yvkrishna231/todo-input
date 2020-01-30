import React, { Component } from 'react'

class ErrorBoundary extends Component {
    state = {
        hasError: false
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
        }
    }
    render() {
        console.log(this.props);
        if (this.state.hasError) {
            return <h1 className='text-danger'>Something went wrong</h1>
        }
        return this.props.children

    }
}

export default ErrorBoundary
