import React, { Component } from 'react'
import DataContext from '../DataContext'

class Child2 extends Component {
    static contextType = DataContext
    render() {
        return (
            <div>
                <h1> {this.context.text1}</h1>
            </div>
        )
    }
}
export default Child2
