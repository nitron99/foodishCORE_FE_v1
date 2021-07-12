import './courses.css'
import React, { Component } from 'react';

class courses extends Component{
    render (){
        return(
            <div className="COURSES" >
                Courses Made by our Team
                <div className="courses">
                    <div className="course1">
                        <div className="course1img" > 
                            <a target="_blank" href="https://www.udemy.com/course/introduction-to-nutraceuticals">
                                <img src="https://ichef.bbci.co.uk/images/ic/1280xn/p088g9c6.jpg"
                                alt=""/>
                            </a>
                        </div>
                        <div className="course1txt" >
                            <h3>Introduction to Nutraceuticals</h3>
                            <br></br>
                             get this course on udemy.
                            </div>
                    </div>

                    <div className="divider"></div>

                    <div className="course2">
                        <div className="course2img" >
                             <a target="_blank" href="https://www.udemy.com/course/plant-based-meat">
                                <img src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F606dc62c77511a5b59bd13d5%2F0x0.jpg"
                                alt=""/>
                            </a>
                        </div>
                        <div className="course2txt" >
                            <h3>Introduction to Plant Based Meat</h3>
                            <br></br>
                             get this course on udemy.
                            </div>
                        
                    </div>
                    
                </div>
            </div>
        );
    }
}


export default courses;