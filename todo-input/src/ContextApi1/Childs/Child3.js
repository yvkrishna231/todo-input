import React from 'react';
import UserContext, { DataConsumer } from '../DataContext'

const Child3 = () => {
    return (
        <div>
            <DataConsumer>
                {value => (
                    value.age.map(val => (
                        <div>
                            <h1>my name is {value.name} and my age is {val.age}</h1>
                        </div>
                    ))
                )}
            </DataConsumer>
        </div>
    );
};


export default Child3;