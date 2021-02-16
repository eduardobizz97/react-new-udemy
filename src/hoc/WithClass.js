import React from 'react';

const WithClass = () => {
    return (
        <div className={props.classes}>
            {props.children}
        </div>
    );
};

export default WithClass;
