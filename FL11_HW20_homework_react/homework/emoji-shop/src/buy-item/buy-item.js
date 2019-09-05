import React from 'react';

function BuyItem(props) {
    let {price, title, id} = props.item;
    return (
        <div className='buy-item'>
            <p>{title + ' - ' + price + '$'}</p>
            <p className='cross' onClick={(e) => {
                let button = document.getElementsByClassName('item-'+id)[0]
                    .getElementsByTagName('button')[0],
                    news = document.getElementsByClassName('news')[0];

                button.disabled = false;
                if(news.id == id) {
                    news.getElementsByTagName('button')[0].disabled = false;
                }

                e.target.parentNode.remove();
            }}>✖</p>
        </div>
    );
}

export {BuyItem};