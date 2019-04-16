import React from 'react';
import { render } from 'react-dom';
import Errorpage from './containers/errorpage';

import '../node_modules/materialize-css/dist/js/materialize.min';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import './index.css';


const mountNode = document.getElementById('app');
render(<Errorpage />, mountNode);
