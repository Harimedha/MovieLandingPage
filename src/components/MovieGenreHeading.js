import './MovieGenreHeading.css';
import Genres from  './genre.json'

function MovieGenreHeading({setGenreValue}){

const genreHandler = (genrelabel) => {
// console.log(genrelabel)
setGenreValue(genrelabel)

}
return(

    <div className='genre-container'>     
        {Genres?.map((genre,idx) => 
            <div className='genre-card'>                         
                <button key={idx} className="genre-button" onClick={()=> genreHandler(genre.label)}>
                    {genre.label}
                </button>
            </div>
        )}
    </div>
    )
}
export default MovieGenreHeading;