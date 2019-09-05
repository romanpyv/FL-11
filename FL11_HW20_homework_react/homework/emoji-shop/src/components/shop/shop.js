import React from 'react';
import {News} from '../news/news'
import {DashBoard} from "../dashboard/dashboard";
import {Basket} from "../basket/basket";

class Shop extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            emoji: [
                {
                    title: '',
                    id: 0,
                    price: 0,
                    stars: 0,
                    emoji: [
                        {
                            char: ''
                        },
                        {
                            char: ''
                        },
                        {
                            char: ''
                        }
                    ],
                }
            ],
            rand: 0,
            list: []
        };

        fetch('http://localhost:1337/emoji-shop')
        .then(data => {
            return data.json();
        })
        .then(data => {
            this.setState(prev => ({
                emoji: data.emoji,
                rand: Math.floor(Math.random() * data.emoji.length)
            }));
        });

        this.addToBusket = this.addToBusket.bind(this);
    }

    addToBusket(item){
        return () => {

            this.setState(prev => {
                return {
                    list: [...prev.list, item]
                };
            });
        }
    }

    render(){
        return (
            <div className='container'>
                <div className='main'>
                    <News emoji={this.state.emoji[this.state.rand]} toBusket={this.addToBusket}/>
                    <DashBoard emoji={this.state.emoji} toBusket={this.addToBusket}/>
                </div>
                <Basket list={this.state.list} />
            </div>
        );
    }
}

export {Shop};
