import React, { Component } from 'react'

class Child2 extends Component {

    render() {
        const { count, handleIncrement } = this.props
        return (
            <div>
                <button
                    onClick={handleIncrement}
                    className='btn btn-sm btn-info'>
                    Click {count} times
                </button>
            </div>
        )
    }
}

export default Child2
