import React from 'react';
const Child1 = ({ title, count, handleOnClick }) => {
    return (
        <div>
            <h1>Hello World From Krishna</h1>
            <h3 className='text-info'>{title} - {count}</h3>
            <button className='btn btn-sm btn-success' onClick={handleOnClick}>Click Here</button>
        </div>
    )
}
export default Child1;
Child1.defaultProps = {
    title: 'Iam Now IN Default Props'
}