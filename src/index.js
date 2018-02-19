import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import Body from './Body';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}><Body /></Provider>, document.getElementById('root'));
registerServiceWorker();
