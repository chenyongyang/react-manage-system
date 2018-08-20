import React from 'react';
import ReactDOM from 'react-dom';

class Component extends React.Component {
    constructor(props) { // props只读，在子组件中只能使用，子组件不能改变它
        super(props);
        this.state = {
            name: 'cyy'
        }
    }
    render() {
        setTimeout(() => {
            this.setState({
                name: 'cyy test' // 要修改的状态
            })
        }, 2000);
        return (
            <div>
                <h1>i am {this.state.name}</h1>
                <p>{this.props.name}</p>
            </div>
        )

    }
}
ReactDOM.render(
    <div>
        <Component name="hello" />
    </div>,
    document.getElementById('app')
);  