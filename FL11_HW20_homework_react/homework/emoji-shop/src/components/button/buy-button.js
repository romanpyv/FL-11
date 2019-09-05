import React from 'react';

class BuyButton extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            disabled: false
        };
        this.clickFunc = this.clickFunc.bind(this);
    }

    clickFunc(func){
        return () => {
            this.setState({
                disabled: true
            });
            func();
        };
    }

    render () {
        const text = this.props.text;
        return (
            <button onClick={this.clickFunc(this.props.clickFunc)} disabled={this.state.disabled}>
                {text}
            </button>
        );
    }
}

export {BuyButton};