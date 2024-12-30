import { Outlet } from "react-router";
import BottomNavigationMenu from "../BottomNavigation/BottomNavigationMenu";
import { RootProvider } from "../../state/rootContext";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <RootProvider>
      <Header />
      <Outlet />
      <BottomNavigationMenu />
    </RootProvider>
  );
};

export default Layout;
