import HeaderMenu from "../../components/HeaderMenu";
import { Outlet } from "react-router-dom";
import { FooterMenu } from "../../components/FooterMenu";

export const TiendaLayout = () => (
  <>
      <HeaderMenu />
      <Outlet />
      <FooterMenu />
  </>
);
