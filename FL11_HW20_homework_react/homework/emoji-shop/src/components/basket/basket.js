import React from 'react';
import {BuyItem} from "../buy-item/buy-item";

function purchase() {
    let buttons = document.getElementsByClassName('main')[0]
       .getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].removeAttribute('disabled');
    }

    let list = document.getElementById('basket-list').children, listLen = list.length;
    for (let i = 0; i < listLen; i++) {
        list[0].remove();
    }


}
function Basket(props) {
    let res;
    if(props.list.length !== 0) {
        res = props.list.map(i => {
            return <BuyItem item={i} key={i.id}/>
        });
    } else {
        res = <i>No items to purchase</i>
    }

    return (
        <div id='basket' className='basket'>
            <h2>Basket</h2>
            <div id='basket-list'>
                {res}
            </div>
            <button onClick={purchase} className='purchase'>Purchase</button>
        </div>
    );
}

export {Basket};
