import React from 'react';
import bootstrapStyles from '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default class MainComponent extends React.Component {
    constructor(){
        super();
    }
    render(){
        return(
            
            <div className={bootstrapStyles.container}>
                
                <div className="mi-be">

                    <div className="container">

                        <div className="row">

                            <form className="col-md-12 col-sm-12">

                                <h1>Booking Entrance</h1>

                            </form>

                        </div>

                    </div>

                </div>

            </div>
        
        )
    }
}
