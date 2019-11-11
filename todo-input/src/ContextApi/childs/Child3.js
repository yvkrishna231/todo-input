import React, { Component } from 'react';
import { DataConsumer } from '../DataContext'

class Child3 extends Component {
    render() {
        return (
            <div>
                <DataConsumer>
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
                </DataConsumer>
            </div>
        )
    }
}

export default Child3
