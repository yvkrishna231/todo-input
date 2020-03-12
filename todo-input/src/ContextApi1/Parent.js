import React, { Component } from 'react';
import { DataProvider } from './DataContext';
import Child1 from './Childs/Child1';


class Parent extends Component {

    state = {
        name: 'krishna',
        age: [23, 33, 22, 11, 111]
    }
    render() {

        const { name, age } = this.state

        return (
            <div>
                <DataProvider>
                    <Child1 />
                </DataProvider>
            </div>
        );
    }
}

export default Parent;