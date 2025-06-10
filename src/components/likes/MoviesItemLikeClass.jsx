import React, {Component} from 'react';

export class MoviesItemLikeClass extends Component {
  render() {
    const { data, onVote } = this.props; //los prop que recibi del padre
    
    return (
      <>
        <div className="col-sm-3 m-2">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <span>Me gustan: {data.likes} votos</span><br />
              <span>No me gusta: {data.dislikes} votos</span>
            </div>
            <div className="card-footer text-muted">
              <button
                onClick={() => onVote(data.id, 'like')}
                className='btn btn-outline-dark me-2'
              >👍</button>
              <button
                onClick={() => onVote(data.id, 'dislike')}
                className='btn btn-outline-dark'
              >👎</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}