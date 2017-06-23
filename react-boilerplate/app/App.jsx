import React from 'react';
import moment from 'moment';
import { isInclusivelyAfterDay } from 'react-dates';
import {render} from 'react-dom';
import MainComponent from './components/MainComponent.jsx';
import DatePicker from './components/DatePicker.jsx';

render(
    <div>
		<MainComponent/>
		<DatePicker isOutsideRange={day =>
        !isInclusivelyAfterDay(day, moment()) ||
        isInclusivelyAfterDay(day, moment().add(2, 'weeks'))
      }/>
    </div>,
    document.getElementById('app')
);
