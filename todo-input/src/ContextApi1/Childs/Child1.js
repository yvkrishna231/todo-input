import React, { Component } from 'react';
import Child2 from './Child2';
import UserContext, { DataConsumer } from '../DataContext';

class Child1 extends Component {
    static contextType = UserContext;
    render() {
        return (
            <div>
                {/* <DataConsumer>
                    {value => (
                        <div>
                            <h1>{value.name}</h1>
                        </div>
                    )}
                </DataConsumer> */}
                <Child2 />
                <h1>{this.context}</h1>
            </div>
        );
    }
}

// Child1.contextType = UserContext

export default Child1;