
import { Catalogo } from "../components/catalogo-prod/Catalogo";
import { FooterMenu } from "../components/FooterMenu";
import { Jumbotron } from "../components/Jumbotron/Jumbotron";

export const HomeTienda = () => {
  return (
    <>
    <Jumbotron title="React" subTitle="Vites" />
    <Catalogo />
    <FooterMenu />
    </>

  );
}