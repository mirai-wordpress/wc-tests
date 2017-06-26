import React from 'react';
import bootstrapStyles from '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default class MainComponent extends React.Component {
    constructor(){
        super();
    }
    render(){
        return(

            <div className={bootstrapStyles.container}>
                
                <div className="mi-rs">

                    <div className="container">

                        <div className="row">

                            <h1>Room Selection</h1>

                        </div>

                    </div>

                </div>

            </div>
        
        )
    }
}
