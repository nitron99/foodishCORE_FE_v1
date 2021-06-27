import React, { Component } from 'react';
import './footer.css';

import { Link } from "react-router-dom";


class footer extends Component{
    render() {
        return(
            <footer className="footer">
                    <div className="quicklinks">
                        <h3>Quick Links</h3>
                        <ul className="linklist">
                            <Link className="listitem" to="/" ><li>- Home</li></Link>
                            <Link className="listitem" to="/courses" ><li>- Courses</li></Link>
                            <Link className="listitem" to="/blogs" ><li>- Blogs</li></Link>
                            <Link className="listitem" to="/articles" ><li>- Articles</li></Link>
                            <Link className="listitem" to="/books" ><li>- Books</li></Link>
                        </ul>
                    </div>

                    <div className="AboutUs" >
                        <h3>About Us</h3>
                        
                    </div>


                    <div className="copyrightbar">
                        © 2021 Palindev, inc.
                    </div>
            </footer>

        );
    }
}


export default footer;