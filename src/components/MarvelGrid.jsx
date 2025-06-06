// components/MovieTable.jsx
import { useEffect, useState } from 'react';
import { getMarvel } from '../helpers/getMarvel';
import { MarvelItem } from './MarvelItem';

export const MarvelGrid = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMarvel();
      setMovies(data);
    };

    fetchMovies();
  }, []);

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-primary">Marvel Movies Table</h2>
      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle rounded shadow">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Summary</th>
              <th>Year</th>
              <th>Thumbnail</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <MarvelItem key={movie.id} movie={movie} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


