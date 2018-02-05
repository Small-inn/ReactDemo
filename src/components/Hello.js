//// 将css文件在js中引入，
//// 通过我们的css-loader和style-loader处理之后，他会把样式全部处理到我们的bundle。js文件中
import './Hello.css';
import './Hello.scss'

import React, {Component} from 'react';

// 直接在js中定义样式，内嵌样式
let style = {
    backgroundColor: 'blue'
}
// 属性扩散
var props={}
props.x=2323;
props.y="acb";



export default class Hello extends Component {
    //this.state="fuzhi"
    //this.state=this.setState("dfd dfdfdfdf ");
    // 生命周期的渲染方法
    render() {

        return (
            <div vara="123131"  varb="abc" {...props}>


                {/* 这是个h1标签*/}
                {
                    //weoiwoieoiwe
                }
                 <h1 style={style}>Hello React</h1>

                <img/>

            </div>
        )
    }
}
