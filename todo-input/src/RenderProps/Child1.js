import React, { Component } from 'react'

class Child1 extends Component {

    render() {
        const { count, handleIncrement, text } = this.props
        return (
            <div>
                <h1 onMouseOver={handleIncrement}>My {text} count is {count}</h1>
            </div>
        )
    }
}

export default Child1
