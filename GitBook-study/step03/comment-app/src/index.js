import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
// import Header from './component/header.js';
import CommentApp from './component/CommentApp.js'
import "./css/commentapp.less"
import "./css/commentinput.less"


ReactDOM.render(<CommentApp />, document.getElementById('root'));
registerServiceWorker();
