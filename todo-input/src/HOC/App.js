import React, { Component } from 'react'
import Hoc1 from './Hoc1';
import Hoc2 from './Hoc2';

class App extends Component {
    render() {
        return (
            <div>
                <Hoc1 text='krishna yendluri'/>
                <Hoc2 />    
            </div>
        )
    }
}

export default App
