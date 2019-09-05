import React from 'react';
import {BuyButton} from '../button/buy-button';

function click(id){
    return () => {
        let buttons = document.getElementsByClassName('dashboard')[0]
            .children;

        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].className.includes('item-' + id)) {
                buttons[i].getElementsByTagName('button')[0].click();
                buttons[i].getElementsByTagName('button')[0].disabled = true;
            }
        }
    }
}

function News(props) {
    let chars = props.emoji.emoji.map(i => i.char).slice(0,3);

    return (
        <div className='news' id={props.emoji.id}>
            <h1>New! {props.emoji.title}</h1>
            <p>Includes <br/> {chars}</p>
            <BuyButton text={'Get (' + props.emoji.price + '$)'} clickFunc={click(props.emoji.id)}/>
        </div>
    );
}

export  {News};