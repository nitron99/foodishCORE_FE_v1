import React, { Component } from 'react';
import './footer.css';


class footer extends Component{
    render() {
        return(
            <footer className="footer">
                    <div className="quicklinks" >
                        <h3>Quick Links</h3>
                        <ul className="linklist">
                            <li>- Home</li>
                            <li>- Courses</li>
                            <li>- Blogs</li>
                            <li>- Articles</li>
                            <li>- Books</li>
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