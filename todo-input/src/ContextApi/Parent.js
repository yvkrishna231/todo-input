import React, { Component } from 'react';
import { DataProvider } from './DataContext'
import Child1 from './childs/Child1';
import Child2 from './childs/Child2';
import Child3 from './childs/Child3';

class Parent extends Component {
    state = {
        text: 'my name is venkata krishna',
        text1: 'Iam From Vrkota',
        Array: ['one', 'two', 'three']
    }
    render() {
        const { text, text1, Array } = this.state;
        return (
            <div className='text-center mt-5'>
                <DataProvider value={{ text, text1, Array }}>
                    <h1>hello world</h1>
                    <Child1 />
                    <Child2 />
                    <Child3 />
                </DataProvider>
            </div >
        )
    }
}

export default Parent
