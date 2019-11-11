
// We can use value of map in another component through props

import React from 'react'
import List1 from './List1';

const App = () => {
    const data = [{ name: 'krishna', age: 24, village: 'vrkota', }, { name: 'venkat', age: 23, village: 'veera raghavuni kota' }]
    return (
        <div className='text-center mt-5'>
            {data.map((val,ind) => <List1 val={val} ind={ind} />)}
        </div>
    )
}

export default App
