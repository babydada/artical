import React, { Component } from 'react';
import './animation.css';

class Toast extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <span className="toast">{this.props.msg}</span>
        )
    }
}

export default Toast