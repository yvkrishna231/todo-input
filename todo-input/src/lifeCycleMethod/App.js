import React, { Component } from 'react'
import LifeCycleA from './LifeCycleA';
import LifeCycleB from './LifeCycleB';

export default class App extends Component {
    render() {
        return (
            <div className='container mt-5'>
                <div className='col-lg-8 shadow border p-3 m-auto text-center'>
                    <h1 className='text-info'>THIS IS VENKATA KRISHNA YENDLURI</h1>
                    <LifeCycleA />
                    <LifeCycleB />
                </div>
            </div>
        )
    }
}
