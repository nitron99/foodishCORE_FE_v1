import React, { Component } from 'react';
import './articleView.css';



class articleView extends Component  {
    render(){
        return(
            <div className="ARTICLEVIEW">
                <div className="articleview">
                <h1>{this.props.location.state.title}</h1>

                    <div className="art_data">
                        
                        
                    </div>
                </div>
            </div>
        );
    }
}


export default articleView;