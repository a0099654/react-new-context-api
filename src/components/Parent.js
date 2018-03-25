import React from 'react';
import Child from './Child';

const Parent = (props) => (
    <React.Fragment>
        <div>This is the parent</div>
        <Child data={props.data}/>
    </React.Fragment>
);

export default Parent;