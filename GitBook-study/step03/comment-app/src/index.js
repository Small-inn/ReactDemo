import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Header from './component/header.js';

ReactDOM.render(<Header />, document.getElementById('root'));
registerServiceWorker();
