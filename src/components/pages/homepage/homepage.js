import './homepage.css'
import React, { Component } from 'react';

class home extends Component{
    render (){
        return(
            <div className="home">
                <div className="home_img">
                    <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
                </div>
                <div className="divider"></div>
                    Content Available on

                <div className="content">
                    <div className="cards">
                        <div className="card1">Food preservation</div>
                        <div className="card2">Hurdle technology</div>
                        <div className="card3">HACCP</div>
                        <div className="card4">Food Laws And Standard</div>
                        <div className="card5">Food Safety</div>
                        <div className="card6">Food nanotechnology</div>

                        <div className="card7">Food preservation</div>
                        <div className="card8">Hurdle technology</div>
                        <div className="card9">HACCP</div>
                        <div className="card10">Food Laws And Standard</div>
                        <div className="card11">Food Safety</div>
                        <div className="card12">Food nanotechnology</div>
                    </div>
                </div>
            </div>
            
        );
    }
}


export default home;