import './Jumbotron.css';

export function Jumbotron({title, subTitle}) {

  return (
    <div className="jumbotron jumbotron-fluid jumbotron-bg text-white">
      <div className="overlay"></div>
      <div className="container position-relative">
        <h1 className="display-4 text-light">{title}</h1>
        <p className="lead">{subTitle}</p>
      </div>
    </div>
  )
}

export default Jumbotron;