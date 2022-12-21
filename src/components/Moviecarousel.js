import React from 'react';
import './MoviePoster.css';
import { useRef, useEffect, useState} from "react";


function Moviecarousel({title, moviedb, isMainRow}){
 
    return(   

       
        <div className='outer-container'>          
            <label className='movie-type'>{title} </label>
                <div className='movies-container'>  
                    {moviedb?.map((movieimg, index) => 
                    <div id='movie-card' className='movie-card'>  
                                            
                        <div className='movie'>
                            <img key={index}     
                            // className='movie-img'                   
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
      
