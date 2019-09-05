import React from 'react';
import {Emoji} from "../emoji/emoji";

function DashBoard(props) {
    let arr = props.emoji, list = [];

    for (let i = 0; i < arr.length; i++) {
        list.push(<Emoji emoji={arr[i]} key={arr[i].id} toBusket={props.toBusket}/>);
    }

    return (
        <div className='dashboard' >
            {list}
        </div>
    );
}

export {DashBoard};
