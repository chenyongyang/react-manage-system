import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
let style = {
    color: 'r' + 'ed' // 可以添加逻辑计算
};

let name = 'cyy';
let flag = true;
let names = ['a', 'b', 'c'];
let jsx = (
    <div>
        {/*变量的使用*/}
        <p>hello {name}</p>
        {/*条件判断*/}
        {
            flag ? <p>hello {name}</p> : <p>i am not {name}</p>
        }
        {/*数组循环*/}
        {
            names.map((name, index) => {
                return <p key={index}>i am {name}</p>;
            })
        }
    </div>
);

ReactDOM.render(
    jsx,
    document.getElementById('app')
);