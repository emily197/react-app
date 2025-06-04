export function Jumbotron({title, subTitle}) {

  return (
    <div class="jumbotron jumbotron-fluid jumbotron-bg text-white">
      <div class="overlay"></div>
      <div class="container position-relative">
        <h1 class="display-4">{title}</h1>
        <p class="lead">{subTitle}</p>
      </div>
    </div>
  )

}

export default Jumbotron;

