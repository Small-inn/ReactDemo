import React, {
    Component
} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppContainer from "./container/AppContainer.js"

export default class Routers extends Component {
    render() {
        return (
            // <Router>
            //     <Route path="/" component={AppContainer} />
            // </Router>
            <AppContainer />
        )
    }
}