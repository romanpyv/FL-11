import React from 'react';
import {BuyButton} from '../button/buy-button'
import {Previev} from "../previev/previev";
import {StarsRate} from "../stars-rate/stars-rate";

function Emoji (props) {
    let emoji = props.emoji;

    return  (
        <div className={'emoji item-'+ emoji.id}>
            <Previev emoji={emoji.emoji}/>
            <div className='emoji-body'>
                <h3>{emoji.title}</h3>
                <StarsRate stars={emoji.stars}/>
                <BuyButton text={'Get (' + emoji.price + '$)'} clickFunc={props.toBusket(emoji)}/>
            </div>
        </div>
    )
}

export {Emoji};
