import React, { Component } from 'react';
import './animation.css'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: true
        }
    }
    componentDidMount() {
        this.input.addEventListener('focus', this.focus);
        this.input.addEventListener('blur', this.focus);
    }
    //网上copy的动画
    focus = () => {
        console.log('focus ');
        this.setState((state) => ({ focused: !state.focused }))
    }
    render() {
        return (
            <div className="searchWrap">
                <input
                    type="text"
                    className={['search', this.state.focused&&'search-focused'].join(' ')}
                    placeholder="搜索本页"
                    ref={input => this.input = input} 
                    onBlur={(e)=>this.focus.bind(this)}
                    onInput={(e)=>this.focus.bind(this)}/>
                <input type="button" className="searchBtn" value="搜索" />
            </div>
        )
    }
}
export default Search