export const getMarvel = async(  ) => {
  
  const marvelMovies = [
    {
      id: 1,
      title: "Iron Man",
      summary: "Tony Stark, un multimillonario industrial y genio inventor, construye una armadura de alta tecnología para escapar de sus captores y se convierte en Iron Man.",
      year: 2008,
      thumbnail: "https://m.media-amazon.com/images/I/81c5hJv3q5S._AC_UF894,1000_QL80_.jpg"
    },
    {
      id: 2,
      title: "The Avengers",
      summary: "Nick Fury reúne a un equipo de superhéroes para salvar al mundo de la amenaza de Loki y su ejército alienígena.",
      year: 2012,
      thumbnail: "https://i.ebayimg.com/thumbs/images/g/wy8AAOSwGMFcv5s2/s-l1200.jpg"
    },
    {
      id: 3,
      title: "Guardians of the Galaxy",
      summary: "Un grupo de inadaptados intergalácticos se une para proteger una poderosa esfera de las manos del villano Ronan el Acusador.",
      year: 2014,
      thumbnail: "https://m.media-amazon.com/images/I/71OLMNKaKEL._AC_UF894,1000_QL80_.jpg"
    },
    {
      id: 4,
      title: "Black Panther",
      summary: "T'Challa regresa a Wakanda para asumir el trono, pero se enfrenta a desafíos que amenazan a su nación y al mundo.",
      year: 2018,
      thumbnail: "https://m.media-amazon.com/images/I/A1PaCX4oXjL.jpg"
    },
    {
      id: 5,
      title: "Avengers: Infinity War",
      summary: "Los Vengadores deben detener a Thanos antes de que destruya la mitad del universo con las Gemas del Infinito.",
      year: 2018,
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg"
    },
    {
      id: 6,
      title: "Avengers: Endgame",
      summary: "Los Vengadores supervivientes intentan revertir el daño causado por Thanos en una batalla épica por el universo.",
      year: 2019,
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"
    },
    {
      id: 7,
      title: "Spider-Man: No Way Home",
      summary: "Peter Parker acude a Doctor Strange para restaurar su anonimato, pero un hechizo sale mal y desata enemigos multiversales.",
      year: 2021,
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg"
    },
    {
      id: 8,
      title: "Doctor Strange in the Multiverse of Madness",
      summary: "Doctor Strange explora el multiverso y enfrenta peligros provenientes de otras realidades para proteger el equilibrio dimensional.",
      year: 2022,
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg"
    },
    {
      id: 9,
      title: "Thor: Love and Thunder",
      summary: "Thor debe volver a la acción para enfrentar a Gorr, el Carnicero de Dioses, y encontrar sentido a su vida.",
      year: 2022,
      thumbnail: "https://m.media-amazon.com/images/I/71Qbo0tyNBL._AC_UF894,1000_QL80_.jpg"
    },
    {
      id: 10,
      title: "Black Panther: Wakanda Forever",
      summary: "Tras la muerte de T'Challa, Wakanda enfrenta nuevos desafíos y enemigos mientras intenta mantener su legado.",
      year: 2022,
      thumbnail: "https://m.media-amazon.com/images/I/81ZAZ90FAZL._AC_UF894,1000_QL80_DpWeblab_.jpg"
    }
  ];


  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(marvelMovies);
    }, 500); 
  });

}