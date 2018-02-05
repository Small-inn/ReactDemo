import React, {Component} from 'react';

// 直接在js中定义样式，内嵌样式
//let style = {
//    backgroundColor: 'blue'
//}

export default class LinkButton extends Component {
    // 构造函数初始化state
    constructor(props) {
        super(props);
        // 初始化state
        this.state = {liked: false};
    }

    // 单击事件处理方法
    handleClick(pm1,pm2,pm3,e) {
        console.log(pm1);
        console.log(pm2);
        console.log(pm3);
        console.log(e);
        this.setState({ liked: !this.state.liked });
    }

    handleClick1=(pm1,pm2,pm3,e)=>{
        console.log(pm1);
        console.log(pm2);
        console.log(pm3);
        console.log(e);
        this.setState({ liked: !this.state.liked });
    }

    // 我们在这个render方法中只能有一个根组件
    render() {
        const text = this.state.liked ? 'like' : 'haven\'t liked';
        return (
            <div>
                <p onClick={this.handleClick.bind(this,1,"111111",function(){})}>
                    You {text} this. Click to toggle. 1111
                </p>
                <p onClick={()=>this.handleClick1(2,"222222",function(){})}>
                    You {text} this. Click to toggle. 2222
                </p>
            </div>
        );
    }
}

// 另一种初始化props的方法
//Hello.defaultProps = {
//    autoPlay: false,
//    maxLoops: 10,
//};
//Hello.propTypes = {
//    autoPlay: React.PropTypes.bool.isRequired,
//    maxLoops: React.PropTypes.number.isRequired,
//    posterFrameSrc: React.PropTypes.string.isRequired,
//    videoSrc: React.PropTypes.string.isRequired,
//};

