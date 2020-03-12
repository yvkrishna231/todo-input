import React, { Component } from 'react';
import UserConext from '../DataContext'
import Child3 from './Child3';

class Child2 extends Component {
    render() {
        return (
            <div>
                <h1>{this.context.name}</h1>
            </div>
        );
    }
}

Child3.contextType = UserConext

export default Child2;