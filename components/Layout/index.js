import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="px-8 py-8 ">{children}</main>
    </>
  );
};

export default Layout;
