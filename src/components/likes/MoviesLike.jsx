import { useState, useEffect } from 'react';
import { getMarvel } from '../../helpers/getMarvel';
import { MoviesItemLikeClass } from './MoviesItemLikeClass';

export const MoviesLike = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMarvel();
      setMovies(data);
    };

    fetchMovies();
  }, []);


  const acumularVoto = (id, type) => {
    console.log('id', id, 'tipo', type); //pruebas de que si llego los id
    setMovies(prev => 
      prev.map( video => 
        video.id === id ? {
          ...video, 
          likes: type === 'like' ? video.likes + 1: video.likes,
          dislikes: type === 'dislike' ? video.dislikes + 1: video.dislikes
         }
         : video
      )
    );
  }

  return (
    <>
      <div className="container my-4">
        <h2 className="mb-4 text-primary">Like y dislike</h2>
        <div className='row'>
          <div className="col-md-12">
            <div className="row">
             {movies.map(movie => (
                <MoviesItemLikeClass 
                key={movie.id} 
                data={movie} //prop dato
                onVote={acumularVoto} //prop funcion
                />
              ))} 
            </div>
          </div>
        </div>
      </div>     
    </>
  );
};