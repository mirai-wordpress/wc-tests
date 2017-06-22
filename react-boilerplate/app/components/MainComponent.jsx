import React from 'react';
import bootstrapStyles from '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
// import {} from 'react-bootstrap';

export default class MainComponent extends React.Component {
        constructor(){
            super();
        }
        render(){
            return(
                <div className={bootstrapStyles.container}>
                    <h1>Replace me with your amazing content</h1>
                </div>
            )
        }
}
