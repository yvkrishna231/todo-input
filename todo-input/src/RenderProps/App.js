import React, { Component } from 'react'
import Child1 from './Child1';
import Child2 from './Child2';
import UserChild from './UserChild';
import Counter from './Counter';

class App extends Component {

    render() {
        return (
            <div className='container mt-5'>
                <div className='col-lg-6 shadow border m-auto text-center'>
                    <Counter>
                        {(count, handleIncrement) => (
                            <Child1 text='vrkota' count={count} handleIncrement={handleIncrement} />
                        )}
                    </Counter>
                    <Counter>
                        {(count, handleIncrement) => (
                            <Child2 count={count} handleIncrement={handleIncrement} />
                        )}
                    </Counter>
                    <UserChild name='venkata krishna yendliuri' />
                </div>
            </div>
        )
    }
}

export default App
