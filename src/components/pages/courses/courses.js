import './courses.css'
import React, { Component } from 'react';

class courses extends Component{
    render (){
        return(
            <div className="courses">
               Courses Made by our Team

                <div className="course1">
                    Image of our course 1
                </div>
                Introduction to Nutraceuticals
                <div className="course1">
                    Image of our course2
                </div>
                Introduction to Plant Based Meat
            </div>
        );
    }
}


export default courses;