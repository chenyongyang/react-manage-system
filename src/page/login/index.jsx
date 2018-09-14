import React from 'react';
import './index.scss';
import MUtil from 'util/index.jsx';
const _util = new MUtil();
import User from 'service/user-service.jsx';
const _user = new User();

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: _util.getUrlParam('redirect') || '/'
        }
    }
    componentWillMount(){
        document.title = '登录 - HAPPY DAY';
    }
    onInputChange(e){
        let val = e.target.value;
        let name = e.target.name;
        this.setState({
            [name]: val
        })
    }
    onInputKeyUp(e){
        if(e.keyCode === 13){
            this.onSubmit();
        }
    }
    onSubmit(e){
        let loginInfo = {
            username: this.state.username,
            password: this.state.password
        };
        let checkResult = _user.checkLoginInfo(loginInfo);
        if (checkResult.status){
            _user.login(loginInfo).then((res) => {
                _util.setStorage('userInfo',res);
                this.props.history.push(this.state.redirect);
            }, (errMsg) => {
                _util.errorTips(errMsg)
            })
        }else{
            _util.errorTips(checkResult.msg)
        }
        
    }
    render() {
        return (
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default login-panel">
                    <div className="panel-heading">
                        欢迎登录 - 后台管理系统
                    </div>
                    <div className="panel-body">
                        <div>
                            <div className="form-group">
                                <input type="text"
                                    name="username"
                                    className="form-control" 
                                    placeholder="请输入用户名" 
                                    onKeyUp={e=>this.onInputKeyUp(e)}
                                    onChange={e => this.onInputChange(e)}
                                    />
                            </div>
                            <div className="form-group">
                                <input type="password"
                                    name="password"
                                    className="form-control" 
                                    placeholder="请输入密码" 
                                    onKeyUp={e => this.onInputKeyUp(e)}
                                    onChange={e => this.onInputChange(e)}
                                    />
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" /> 记住密码
                                </label>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block"
                                onClick={e=>this.onSubmit(e)}>登录</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;