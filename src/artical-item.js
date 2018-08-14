import React, { Component } from 'react';
import './animation.css'

class ArticalItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animation: 'hide'
        }
    }
    show() {
        this.setState({
            animation: 'show'
        })
    }
    hide() {
        this.setState({
            animation: 'hide'
        })
    }
    render() {
        return (
            <div style={{ border: '1px dotted #fff456', backgroundColor: '#efe', marginBottom: "50px", padding: "30px"}}>
                <h2>{this.props.title}</h2>
                <p>{this.props.desc}</p>
                <span onClick={() => this.show()} className="showMore">查看更多</span>
                <div style={{ width: '100%', flexDirection: 'column',wordBreak:'break-all' }} className={this.state.animation}>
                    <span onClick={() => this.hide()} style={{marginTop: '20px',backgroundColor:'#fff456' }} className="showMore">收起</span>
                    <p>{this.props.content}</p>
                </div>
            </div>
        );
    }
}

export default ArticalItem;