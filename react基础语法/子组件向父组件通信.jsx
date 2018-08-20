import React from 'react';
import ReactDOM from 'react-dom';

class Child extends React.Component {
    constructor(props) {
        super(props);
    }
    changeColor() {
        this.props.changeColor('red');
    }
    render() {
        return (
            <div>
                <p>父组件的背景色：{this.props.bgColor}</p>
                <button onClick={(e) => { this.changeColor(e) }}>改变背景色</button>
            </div>
        );
    }


}

class Father extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor: 'blue'
        }
    }
    changeColor(color) {
        this.setState({
            bgColor: 'red'
        })
    }
    render() {
        return (
            <div style={{ background: this.state.bgColor }}>
                <Child changeColor={(e) => { this.changeColor(e) }} />
            </div>
        );
    }
}

ReactDOM.render(
    <Father />,
    document.getElementById('app')
);  