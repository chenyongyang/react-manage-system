import React from 'react';
import {BrowserRouter as Router, Link, Switch, route} from 'react-router-dom';
import MUtil from 'util/index.jsx';
import User from 'service/user-service.jsx';
const _util = new MUtil();
const _user = new User();

class TopNav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: _util.getStorage('userInfo').username
        }
    }
    onLogout(){

    }   
    render(){
        return (
            <div className="navbar navbar-default top-navbar">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/"><b>HAPPY</b>DAY</Link>
                </div>
                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <a className="dropdown-toggle" href="javascript:;" >
                            <i className="fa fa-envelope fa-fw"></i>
                            {
                                this.state.username
                                ? <span>欢迎，{this.state.username}</span>
                                : <span>欢迎您</span>
                            }
                            <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            {/* <li>
                                <a href="#">
                                    <i className="fa fa-user fa-fw"></i> User Profile
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-gear fa-fw"></i> Settings
                                </a>
                            </li>
                            <li className="divider"></li> */}
                            <li>
                                <a onClick={()=>{this.onLogout()}}>
                                    <i className="fa fa-sign-out fa-fw"></i>
                                    <span>退出登录</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default TopNav;