import React from 'react';
import ReactDOM from 'react-dom';

function Component() {
    return <h1>i am cyy!!! </h1>
}

class Es6Component extends React.Component {
    render() {
        return <h1>i am cyy es6</h1>
    }
}
ReactDOM.render(
    <div>
        <Component />
        <Es6Component />
    </div>,
    document.getElementById('app')
);  