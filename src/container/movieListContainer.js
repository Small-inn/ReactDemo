
import React, {Component} from 'react'

import {browserHistory} from 'react-router'

import service from '../service/list.js'

export default class movieListContainer extends Component {
    //
   constructor(props,context){
        super(props,context)
       this.state({
           movieData:[]
       })
    }

    //static contextTypes= {
    //    router: React.PropTypes.object
    //}
    //
    //getFunc=()=>{s
    //    const _this=thiss
    //    setTimeout(function(){
    //        //Ìø×ªÒ³Ãæ
    //        //browserHistory.push('/home')
    //        //_this.context.router.push('/home')
    //    },3000)
    //}
    fetch(){
        const promise = service.getMovieListData()
        promise.then(
            function(data){
                this.setState({
                    movieData = data
                })
            }
            ,
            function(reason){
                console.log(reason)
            }
        )
    }


    componentDidMount() {
        this.fetch()
    }


    render (){
        return (
            <div>
                <img src="" alt=""/>
                <div>
                    <h3></h3>
                    <span></span>
                </div>
            </div>
        )
    }
}