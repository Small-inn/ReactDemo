//dom操作demo
import React, { Component } from 'react';

export default class MyInputFocus extends Component {
    // 用静态属性的方式去初始化props属性
    //static defaultProps={
    //    autoPlay:false,
    //    maxLoops:10,
    //};
    // 静态属性校验
    //static propTypes = {
    //    autoPlay: React.PropTypes.bool.isRequired,
    //    maxLoops: React.PropTypes.number.isRequired,
    //};

    // 初始化state的方法之一
    state={
        userInput: ''
    }

    constructor(props) {
        super(props);
        // 在构造函数里面初始化state的方法之一
        //this.state={ userInput: '' };
    }


    clearAndFocusInput() {
        // setState方法第二个参数还可以赋值一个回调函数
        this.setState({ userInput: '' }, () => {
            this.refs.theInput.focus();
        });
    }

    componentDidMount() {
        // 在已经插入到真实的dom节点中，注册窗体改变大小的事件监听

        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        // 在组件将要被卸载的时候移除监听事件
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize(e) {
        console.log(window.innerWidth);
    }

    handleChange(e) {
        console.log(this.refs.theInput1.value);
        this.setState({ userInput: e.target.value });
    }


    render() {
        return (
            <div>
                {/*受控表单如果想改变值，必须和state绑定上，才能改变*/}
                <input
                    ref="theInput1"
                    value={this.state.userInput}
                    onChange={this.handleChange.bind(this)}
                />
                <input
                    ref="theInput1"
                    onChange={this.handleChange.bind(this)}
                    />
            </div>
        );
    }
}

//写在外面的写法
//MyInputFocus.defaultProps={
//    autoPlay:false,
//    maxLoops:10,
//}
//MyInputFocus.propTypes = {
//    autoPlay: React.PropTypes.bool.isRequired,
//    maxLoops: React.PropTypes.number.isRequired,
//}
