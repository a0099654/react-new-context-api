import React from 'react';

const GrandChild = (props) => (
    <React.Fragment>
        <p>This is the grandchild</p>
        <p>{`My name is ${props.data.name}`}</p>
        <p>{`My age is ${props.data.age}`}</p>
        <p>{`My job is ${props.data.job}`}</p>
    </React.Fragment>
)

export default GrandChild;