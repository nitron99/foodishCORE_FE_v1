import React, { Component } from 'react';
import './books.css';

class bookcard extends Component{
    render (){
        return( 
          <div >
              <a href={this.props.url } target="_blank"  rel="noreferrer" >
                <div className="bookcard">     
                    <img src={this.image} className="image" alt=""/>

                    
                    <div className="bookdetail">
                        <div className="title" ><em>{this.props.title}</em></div>
                        <div className="author" >{this.props.author}</div>
                        <div className="pages" >{this.props.pages} pages</div>
                    </div>
                    

                    

                </div>

            </a>
          </div>
        );
    }
}


export default bookcard;