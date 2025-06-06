export const MarvelItem = ({ movie }) => {
  return (
    <tr>
      <td>{movie.id}</td>
      <td>{movie.title}</td>
      <td>{movie.summary}</td>
      <td>{movie.year}</td>
      <td>
        <img
          src={movie.thumbnail}
          alt={movie.title}
          className="img-fluid rounded"
          style={{ maxWidth: '60px', height: 'auto' }}
        />
      </td>
    </tr>
  );
}