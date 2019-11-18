import React, { Component } from 'react'
import Child from './Child';

class Parent extends Component {
    constructor() {
        super()
        this.inputRef = React.createRef();
    }
    handleOnClick = () => {
        this.inputRef.current.focus();
    }
    render() {
        return (
            <div>
                <Child ref={this.inputRef} /><br></br>
                <button onClick={this.handleOnClick}>focus input</button>
            </div>
        )
    }
}

export default Parent
