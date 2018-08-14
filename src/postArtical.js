import React, { Component } from 'react';

class PostArtical extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artical: {
                title: '',
                desc: '',
                content: ''
            }
        }
    }

    setTitle(e) {
        let val = e.target.value;
        let data = Object.assign({}, this.state.artical, { title: val });
        this.setState({
            artical: data
        });
    }
    setDesc(e) {
        let val = e.target.value;
        let data = Object.assign({}, this.state.artical, { desc: val });
        this.setState({
            artical: data
        });
    }
    setContent(e) {
        let val = e.target.value;
        let data = Object.assign({}, this.state.artical, { content: val });
        this.setState({
            artical: data
        });
    }
    confirm = (e) => {
        e.preventDefault();
        if (!this.state.artical.title) {
            alert('请输入title ');
        } else if (!this.state.artical.content) {
            alert('请输入内容 ');
        } else if (this.state.artical.title && this.state.artical.content) {
            const { filterCallback } = this.props;
            const data = this.state.artical;
            filterCallback(data);
            let newValue = Object.assign({}, this.state.artical, { desc: '', title: '', content: '' });
            this.setState({
                artical: newValue
            });
        }


    }
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', margin: '90px auto 0', border: '1px dotted #e71e1c', width: '75%' }}>
                <form style={{ display: 'flex', flexDirection: 'row',alignItems:'center' }}>
                    <label>
                        title
                        </label>
                    <textarea
                        value={this.state.artical.title}
                        onChange={(e) => this.setTitle(e)}
                        style={{ display: 'inline-block', width: '250px', height: '25px' }}>
                    </textarea>

                    <label>
                        desc
                        </label>
                    <textarea
                        value={this.state.artical.desc}
                        onChange={(e) => this.setDesc(e)}
                        style={{ display: 'inline-block', width: '250px', height: '25px' }}>
                    </textarea>

                    <label>
                        content
                        </label>
                    <textarea
                        value={this.state.artical.content}
                        onChange={(e) => this.setContent(e)}
                        style={{ display: 'inline-block', width: '250px', height: '70px',margin:'20px' }}>
                    </textarea>

                    <input
                        type="submit"
                        value="Submit"
                        style={{ backgroundColor: 'transparent', width: '80px', marginLeft: '20px' }}
                        onClick={this.confirm} 
                        className="showMore"/>
                </form>
            </div>
        )
    }
}

export default PostArtical;