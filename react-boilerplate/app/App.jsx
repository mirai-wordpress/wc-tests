import React from 'react';
import {render} from 'react-dom';
import BookingEntrance from './components/BookingEntrance.jsx';
//import RoomSelection from './components/RoomSelection.jsx';
//import bootstrapStyles from '../node_modules/bootstrap/dist/css/bootstrap.css';
//import './css/style.css';

render(
    <div>
		<BookingEntrance/>
// 		<RoomSelection/>
    </div>,
    document.getElementById('app')
);
