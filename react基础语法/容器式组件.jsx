import React from 'react';
import ReactDOM from 'react-dom';

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'test',
            age: 22,
            input: ''
        };
    }
    handleClick() {
        this.setState({
            age: this.state.age + 1
        })
    }
    model(e) {
        this.setState({
            input: e.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <p>{this.state.age}</p>
                {/* 通过箭头函数修正this指向 */}
                <button onClick={(e) => { this.handleClick(e) }}>增加age</button>
                <p>{this.state.input}</p>
                <input type="text" value={this.state.input} onChange={(e) => { this.model(e) }} />
            </div>
        );
    }


}

class Title extends React.Component {
    render() {
        return (
            <h1>{this.props.children}</h1>
        );
    }
}
class App extends React.Component {
    render() {
        return (
            <div>
                <Title>
                    <span>这里是标题</span>
                    <p>这里是内容</p>
                </Title>
                <hr />
                <Component />
            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('app')
);  