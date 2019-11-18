import React from 'react';

class InputRefsType2 extends React.Component {
    constructor(props) {
        super(props)
        this.inputrefs = React.createRef();
        this.cbRefs = null;
        this.setcbRefs = element => {
            this.cbRefs = element;
        }
    }

    componentDidMount() {
        if (this.cbRefs) {
            this.cbRefs.focus();
        }
    }
    handleOnClick = () => {
      alert(this.cbRefs.value)
    }
    render() {
        return (
            <div className='text-center mt-5'>
                <form>
                    <input type='text' ref={this.setcbRefs} />
                    <button onClick={this.handleOnClick}>click</button>
                </form>
            </div>
        )
    }
}

export default InputRefsType2;