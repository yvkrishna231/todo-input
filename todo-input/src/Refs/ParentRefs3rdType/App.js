
//with out using componentDidMount method

import React from 'react';
import FocusInput from './FocusInput'

class App extends React.Component {
    render() {
        return (
            <div className='text-center mt-5'>
                <FocusInput />
            </div>
        )
    }
}

export default App;