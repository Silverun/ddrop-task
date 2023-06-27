import { Outlet, Link } from "react-router-dom";
import LayoutStyle from "../../styles/Layout.styled";

const Layout = () => {
  return (
    <>
      <LayoutStyle.Header>
        <Link to="/">Streamer Spotlight</Link>
      </LayoutStyle.Header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
export default Layout;
