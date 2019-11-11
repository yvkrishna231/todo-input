import React, { Component } from 'react'
import HocMain from './HocMain'

class Hoc1 extends Component {
    state = {
        name: 'venkata krishna'
    }
    render() {
        const { count, handleOnClick } = this.props
        return (
            <div className='text-center mt-5'>
                <h1
                    onMouseOver={handleOnClick}>
                    Hello
                {this.state.name}
                    Your Count Is {count}</h1>
            </div>
        )
    }
}

export default HocMain(Hoc1, 1.6);
