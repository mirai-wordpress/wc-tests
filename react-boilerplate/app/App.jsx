import React from 'react';
import {render} from 'react-dom';
import MainComponent from './components/MainComponent.jsx';
import DatePicker from './components/DatePicker.jsx';

render(
    <div>
		<MainComponent/>
		<DatePicker/>
    </div>,
    document.getElementById('app')
);
