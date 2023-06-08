import Navbar from "../Navbar";
import { Down, Up } from "../Shape";

const Layout = ({ children }) => {
  return (
    <>
      <Up />
      <Navbar />
      <main className=" mt-[47px] md:mt-[70px] py-12 px-2 md:py-[48px] lg:py-[48px] lg:px-4 md:max-w-3xl xl:max-w-full lg:max-w-5xl">
        {children}
      </main>
      <Down />
    </>
  );
};

export default Layout;
