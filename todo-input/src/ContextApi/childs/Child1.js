import React, { Component } from 'react';
import DataConsumer from '../DataContext'

class Child1 extends Component {
    render() {
        return (
            <div>
                <DataConsumer>
                    {(user) => (
                        <div>
                            <h1>hello {user.text} <br></br> And</h1>
                        </div>
                    )}
                </DataConsumer>
            </div>
        )
    }
}

export default Child1
