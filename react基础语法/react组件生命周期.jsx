import React from 'react';
import ReactDOM from 'react-dom';

class Component extends React.Component {
    constructor(props) {
        console.log('构造函数：')
        super(props);
        this.state = {
            data: 'old state'
        }
    }
    componentWillMount() {
        console.log('组件将要挂载')
    }
    onStateChange() {
        this.setState({
            data: 'new state'
        })
    }
    render() {
        console.log('组件渲染*************************')
        return (
            <div>
                <p>state:{this.state.data}</p>
                <p>props:{this.props.value}</p>
                <button onClick={() => { this.onStateChange() }}>更改状态</button>
            </div>
        );
    }
    componentDidMount() {
        console.log('组件已经挂载')
    }
    shouldComponentUpdate() {
        console.log('组件是否更新')
        return true;
    }
    componentWillReceiveProps() {
        console.log('组件将要接收props')
    }
    componentWillUpdate() {
        console.log('组件将要更新')
    }
    componentDidUpdate() {
        console.log('组件已经更新')
    }
    componentWillUnmount() {
        console.log('组件将要销毁')
    }


}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'old props',
            flag: true
        }
    }
    onPropsChange() {
        this.setState({
            data: 'new props'
        })
    }
    onComponentUnmount() {
        this.setState({
            flag: false
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.flag ? <Component value={this.state.data} /> : null
                }
                <button onClick={() => { this.onPropsChange() }}>更改props</button>
                <button onClick={() => { this.onComponentUnmount() }}>销毁组件</button>
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('app')
);  