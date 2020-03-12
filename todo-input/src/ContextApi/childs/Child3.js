import React, { Component } from 'react';
import DataContext from '../DataContext'

class Child3 extends Component {
    render() {
        return (
            <div>
                {/* <DataConsumer>
                    {
                        data => (
                            <div>
                                {data.Array && data.Array.map((value, index) => {
                                    return (
                                        <h1 key={index}>iam {value} year old</h1>
                                    )
                                })}
                            </div>
                        )
                    }
                </DataConsumer> */}
                <h1>{this.context.text}</h1>
            </div>
        )
    }
}

Child3.contextType = DataContext

export default Child3
