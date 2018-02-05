import React,{Component} from 'react'

import { Router, Route, Link ,browserHistory, IndexRoute,hashHistory} from 'react-router'

import AppContainer from '../container/AppContainer.js'
import HomeContainer from '../container/HomeContainer.js'
import ListContainer from '../container/ListContainer.js'
import CallContainer from '../container/CallContainer.js'
import movieList from '../container/movieListContainer.js'

export default class Routers extends Component {

    getfunction=()=>{
        console.log('onEnter')
    }

    render(){
        return (
            <Router history={browserHistory}>
                <Route path="/" component={AppContainer}>
                    <IndexRoute component={HomeContainer}/>
                    <Route path="home" component={HomeContainer}></Route>
                    <Route path="list"
                           component={ListContainer}
                           onEnter={()=>this.getfunction()}
                           onLeave={()=>console.log('onLeave')}
                        >
                        <IndexRoute component={movieList}/>
                        <Route path="/movielist" component={movieList}></Route>
                    </Route>
                    <Route path="call" component={CallContainer}></Route>
                </Route>
            </Router>
        )
    }
}