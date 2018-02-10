import React, {
    Component
} from 'react'

// 1.0  2.0
// const users = [
//     { username: 'Jerry', age: 21, gender: 'male' },
//     { username: 'Tomy', age: 22, gender: 'male' },
//     { username: 'Lily', age: 19, gender: 'female' },
//     { username: 'Lucy', age: 20, gender: 'female' }
// ]

class Users extends Component {
    render(){
        // 1.0 
        // const userEle = [];    
        // for(let i of users){
        //     userEle.push(
        //         <div>
        //         <div>姓名：{i.username}</div>
        //         <div>年龄：{i.age}</div>
        //         <div>性别：{i.gender}</div>
        //         <hr/>
        //     </div>
        //     )
        // }    
        // return(
        //     <div>{userEle}</div>
        // )
        // 2.0
        // return (
        //     <div>
        //         {users.map(user => {
        //             return (
        //                 <div>
        //                     <div>姓名：{user.username}</div>
        //                     <div>年龄：{user.age}</div>
        //                     <div>性别：{user.gender}</div>
        //                 </div>
        //             )
        //         })}
        //     </div>
        // )
        // 3.0
        const { user } = this.props
        return(
            <div>
                <div>姓名：{user.username}</div>
                <div>年龄：{user.age}</div>
                <div>性别：{user.gender}</div>
                <hr/>
            </div>
        )
    }
}
export default Users