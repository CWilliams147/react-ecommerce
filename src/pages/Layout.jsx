import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

const primaryNav = [
  { title: "Home", url: "/" },
  { title: "Products", url: "/products" },
];

const Layout = () => {
  return (
    <>
      <Navigation navItems={primaryNav} />
      <Outlet />
    </>
  );
};

export default Layout;
