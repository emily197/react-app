
import { MarvelGrid } from "./components/MarvelGrid";
import { HeaderMenu } from "./components/HeaderMenu";
import { FooterMenu } from "./components/FooterMenu";

import { Jumbotron } from "./components/Jumbotron/Jumbotron";

export const MarvelApp = () => {

  return (
    <>
    <HeaderMenu />
    <Jumbotron title="React" subTitle="Vites" />
    <div className="marvel-app">
      <MarvelGrid />
    </div>
    <FooterMenu />
    </>
  );
}