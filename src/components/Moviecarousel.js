import React from 'react';
import './MoviePoster.css';
import HorizontalScroll from 'react-scroll-horizontal'

import { useRef, useEffect, useState} from "react";


function Moviecarousel({title, moviedb}){
 

    return(   
        <div className='outer-container'>          
            <div className='movie-type'>{title} </div>            
                <div className='movies-container'>  
                    {moviedb?.map((movieimg, index) => 
                    <div id='movie-card' className='movie-card'>                                             
                        <div className='movie'>
                            <img key={index}                                                    
                            src={movieimg.Poster}
                            alt="mov">
                            </img>     
                            <h4 className='title'>{movieimg.Title}</h4>                      
                        </div>                                                           
                    </div>                
                )}
                </div>            
        </div>    
    )
}
export default Moviecarousel;
      
