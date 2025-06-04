
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/039.png',
  imageSize: 90,
};

export function Profile() {
  return (
    <div>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Foto de ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </div>
  );
}
