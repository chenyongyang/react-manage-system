import React from 'react';
import ReactDOM from 'react-dom';
/**
 *  子组件1向父组件传递信息，父组件再将信息传递给子组件2
 *  状态提升：将子组件的状态放在父组件的状态中
 */
class Child1 extends React.Component {
    constructor(props) {
        super(props);
    }
    changeColor() {
        this.props.changeColor('red');
    }
    render() {
        return (
            <div>
                <p>child1</p>
                <button onClick={(e) => { this.changeColor(e) }}>改变child1背景色</button>
            </div>
        );
    }
}

class Child2 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p style={{ background: this.props.bgColor }}>child2</p>
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
    changeChild2Color(color) {
        this.setState({
            bgColor: color
        })
    }
    render() {
        return (
            <div>
                <Child1 changeColor={(e) => { this.changeChild2Color(e) }} />
                <Child2 bgColor={this.state.bgColor} />
            </div>
        );
    }
}

ReactDOM.render(
    <Father />,
    document.getElementById('app')
);  