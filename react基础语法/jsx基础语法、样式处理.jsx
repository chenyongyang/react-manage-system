import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
let style = {
    color: 'r' + 'ed' // 可以添加逻辑计算
}
let jsx = <div className='jsx' style={style}>hello jsx</div>; // jsx就是一个表达式，可以看做是js的一种数据类型

ReactDOM.render(
    jsx,
    document.getElementById('app')
);