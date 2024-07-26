import { Outlet } from "react-router-dom";
import { Header } from "../Header/Haeder";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
