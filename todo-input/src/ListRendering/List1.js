import React from 'react'

const List1 = ({ val, ind }) => {
    return (
        <div>
            <h3 key={ind}>this is {val.name}  and iam {val.age} years old and iam from {val.village} village</h3>
        </div>
    )
}

export default List1
