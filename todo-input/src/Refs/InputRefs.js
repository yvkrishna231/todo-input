//one modal of inputRefs concept;


import React from 'react';

class InputRefs extends React.Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }
    componentDidMount() {
        console.log(this.inputRef)
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div className='text-center mt-5'>
                <input type='text' ref={this.inputRef} />
            </div>
        )
    }
}

export default InputRefs