import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'semantic-ui-css/semantic.min.css';
import './styles/my-framework/index.scss';
import './styles/ui-config.scss';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();