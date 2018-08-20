import React from 'react';
import ReactDOM from 'react-dom';

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'test',
            age: 22
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            age: this.state.age + 1
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <p>{this.state.age}</p>
                <button onClick={this.handleClick}>增加age</button>
            </div>
        );
    }


}
ReactDOM.render(
    <div>
        <Component />
    </div>,
    document.getElementById('app')
);  