import React from 'react'
import Input from './Input';

class FocusInput extends React.Component {
    constructor() {
        super()
        this.componentFocus = React.createRef();
    }
    handleOnClick = () => {
        this.componentFocus.current.focusInput();
    }
    render() {
        return (
            <div>
                <Input type='text' ref={this.componentFocus} /><br></br>
                <button onClick={this.handleOnClick}>focus input</button>
            </div>
        )
    }
}

export default FocusInput;