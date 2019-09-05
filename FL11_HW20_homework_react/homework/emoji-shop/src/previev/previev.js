import React from 'react';

function Previev (props){
    return (
        <div className='previev'>
            <span className='previev-first'>{props.emoji[0].char}</span>
            <span className='previev-second'>{props.emoji[1].char}</span>
            <span className='previev-third'>{props.emoji[2].char}</span>
        </div>
    );
}

export {Previev};