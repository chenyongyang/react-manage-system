import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import Layout from 'component/layout/index.jsx';
import Home from 'page/home/index.jsx';
import Login from 'page/login/index.jsx';

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/" render={props => (
                            <Layout>
                                <Switch>
                                    <Route path="/" component={Home} />
                                    <Route path="/product" component={Home} />
                                    <Route path="/product-category" component={Home} />
                                </Switch>
                            </Layout>
                        )} />
                    </Switch>
                    
                </Router>
            </div>
        );
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('app')
);