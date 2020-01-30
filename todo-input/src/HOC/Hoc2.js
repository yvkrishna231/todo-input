import React from 'react';
import HocMain from './HocMain'

class Hoc2 extends React.Component {

    render() {
        const { count, handleOnClick } = this.props
        return (
            <div className='text-center'>
                <button
                    className='btn btn-sm btn-info'
                    onClick={handleOnClick}>Click <b className='text-dark'>{count}</b> Times</button>
            </div>
        )
    }
}
export default HocMain(Hoc2, 1);