import { FooterMenu } from "../components/FooterMenu";
import { Jumbotron } from "../components/Jumbotron/Jumbotron";
import { FirstComponent } from "../components/FirstComponent";

export const HomeApp = () => {

  return (
    <>
    <Jumbotron title="React" subTitle="Vites" />
    <FirstComponent />
    <FooterMenu />
    </>
  );
}