import './content.css'
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class content extends Component{
    render (){
        return(
            <div className="CONTENT">
                <div className="contents">

                    <Link className="article" to="/articles" >
                        <div >Articles</div>
                    </Link>
                    <Link className="blog" to="/blogs" >
                        <div  >Blogs</div>
                    </Link>
                    <Link  className="book" to="/books" >
                        <div>Books</div>
                    </Link>

                    <Link  className="book" to="/books" >
                        <div>GATE</div>
                    </Link>
                </div>

                <div className="divider"></div>

                <div className="othercontent">
                    This is for other content on this page.....

                </div>
            </div>
        );
    }
}


export default content;