import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
/*
    HashRouter BrowserRouter 进行路由切换
    带参数的路由及如何取到参数
    组件内部再分路由 Switch Route
    通配路由配置一般放最后
*/
class A extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                component A
                <Switch>
                    <Route exact path={`${this.props.match.path}`} render={
                        (route) => {
                            return <div>当前组件是不带参数的组件A</div>;
                        }} />
                    <Route exact path={`${this.props.match.path}/sub`} render={
                        (route) => {
                            return <div>当前是sub组件</div>;
                        }} />
                    <Route path={`${this.props.match.path}/:id`} render={
                        (route) => {
                            return <div>当前组件是带参数的，参数为：{route.match.params.id}</div>;
                        }} />
                </Switch>
            </div>
        );
    }
}

class B extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                component B
            </div>
        );
    }
}

class Wrapper extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Link to="/a/123">带参数的组件A</Link>
                <br />
                <Link to="/a/sub">/a/sub</Link>
                <br />
                <Link to="/a">不带参数的组件A</Link>
                <br />
                <Link to="/b">组件B</Link>
                {this.props.children}
            </div>
        );
    }
}

ReactDOM.render(
    <Router>
        <Wrapper>
            <Route path="/a" component={A} />
            <Route path="/b" component={B} />
        </Wrapper>
    </Router>
    ,
    document.getElementById('app')
);  