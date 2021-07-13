import React, { Component } from 'react';
import './books.css';
import Bookcards from './bookcard';
import {booklist} from './booklist';


class books extends Component{
    render (){
        return(
          <div className="BOOKS" >
              <div className="books">
                  <div className="text">Books related to food technology</div>
                  <div className="bookcards">
                   {booklist.map((item, index)=>{
                            return (
                                   <Bookcards author={item.author} title={item.title}
                                   pages={item.pages} key={index} url={item.url}/>
                                                  
                            )
                        })} 
                  </div>
            
              </div>
              
          </div>
        
        );
    }
}


export default books;