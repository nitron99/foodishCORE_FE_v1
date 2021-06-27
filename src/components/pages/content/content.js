import './content.css'
import React, { Component } from 'react';

class content extends Component{
    render (){
        return(
            <div className="content">
                <div className="contents">
                <div className="articles">articles</div>
                <div className="blog" >blog</div>
                <div className="books" >books</div>
                </div>

                <div className="divider"></div>

                <div className="content">
                    This is for other content on this page.....

                </div>
            </div>
        );
    }
}


export default content;