import MUtil from 'util/index.jsx';

const _util = new MUtil();

class User{
    login(loginInfo){
        return _util.request({
            type: 'post',
            url: '/manage/user/login.do',
            data: loginInfo
        })
    }
    // 检查登录接口的数据是不是合法
    checkLoginInfo(loginInfo){
        let username = $.trim(loginInfo.username);
        let password = $.trim(loginInfo.password);
        if(typeof username !== 'string' || username.length === 0){
            return{
                status: false,
                msg: '用户名不能为空'
            }
        }
        if (typeof password !== 'string' || password.length === 0) {
            return {
                status: false,
                msg: '密码不能为空'
            }
        }
        return {
            status: true,
            msg: '验证成功'
        }
    }
}

export default User;