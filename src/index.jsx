import React from 'react';
import { render } from 'react-dom';
import App from './containers/app';
import '../node_modules/materialize-css/dist/css/materialize.min.css';

import '../node_modules/materialize-css/dist/js/materialize.min';

import './index.css';

const mountNode = document.getElementById('app');
render(<App />, mountNode);
