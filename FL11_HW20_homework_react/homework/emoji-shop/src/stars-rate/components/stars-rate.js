import React from 'react';

function StarsRate(props) {
    let {stars} = props, str='';

    for (let i = 0; i < stars; i++) {
        str += '★';
    }
    return (
        <div className='stars'>
            <span>{str}</span>
        </div>
    );
}

export {StarsRate};
