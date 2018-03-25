import React from 'react';
import GrandChild from './GrandChild';

const Child = (props) => (
    <React.Fragment>
        <div>This is a child</div>
        <GrandChild data={props.data} />
    </React.Fragment>
);

export default Child;