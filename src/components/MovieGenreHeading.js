import './MovieGenreHeading.css';
import Genres from  './genre.json'

function MovieGenreHeading({genrelist}){
    
const genre = {genrelist};
console.log(typeof(genre));
return(

    <div className='genre-container'>     
        {Genres?.map((genre,idx) => 
            <div className='genre-card'>                         
                <button key={idx} className="genre-button">
                    {genre.label}
                </button>
            </div>
        )}
    </div>
    )
}
export default MovieGenreHeading;