import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>UserName is : {props.userName}</p>
            <p>An Other paragraph.</p>
        </div>
    );
};

export default userOutput;
