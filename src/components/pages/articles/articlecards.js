import React, { Component } from 'react';
import './articles.css';



import { Link } from "react-router-dom";



class articlecards extends Component{
    render (){
        return(
            <Link to={{
                pathname: `/articles/${this.props.url}`,
                state: {
                    title:this.props.title,
                    data:this.props.data
                }

            }} >
                <div className="articlecard">      
                   
                        <div className="title" >{this.props.title}</div>

                        
                        
                </div>

               
            </Link>
        
        );
    }
}


export default articlecards;