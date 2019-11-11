import React, { Component } from 'react'
import Child1 from './Child';

class Parent extends Component {
    state = {
        count: 0
    }
    handleOnClick = () => {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        return (
            <div>
                <Child1 count={this.state.count} handleOnClick={this.handleOnClick} />
            </div>
        )
    }
}

export default Parent
