import React from 'react';
import {render} from 'react-dom';
import './css/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import MainComponent from './components/MainComponent.jsx';

render(
    <MainComponent/>, 
    document.getElementById('app')
);

