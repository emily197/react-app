
import { Catalogo } from "../components/catalogo-prod/Catalogo";
import { FooterMenu } from "../components/FooterMenu";
import HeaderMenu from "../components/HeaderMenu";
import { Jumbotron } from "../components/Jumbotron/Jumbotron";

export const HomeTienda = () => {
  return (
    <>
    <HeaderMenu />
      <Catalogo />
    <FooterMenu />
    </>

  );
}