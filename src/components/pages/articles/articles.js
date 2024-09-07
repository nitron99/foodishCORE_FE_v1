import React, { Component } from 'react';
import './articles.css';

import Articlecards from './articlecards';
import {articlesList} from './articlelist';


class articles extends Component{
    render (){
        return(
          <div className="ARTICLES" >
              <div className="articles" >
                <div className="art_text">Articles related to food technology.</div>

                <div className="art_content" >
                  {articlesList.map((item, index)=>{
                      return(
                        <Articlecards title={item.title}  key={index} url={item.url} data={item.data}/>
                      )
                      })}
                </div>
               
              </div>
          </div>
        
        );
    }
}


export default articles;