import Tabs from "../Tabs";

const Layout = ({ idTab, children }) => {
  return (
    <>
      <div className="flex flex-wrap w-full mx-auto md:w-[80%] md:mx-auto">
        <div className="w-full  md:w-[90%] mx-auto">
          <Tabs idTab={idTab} />
        </div>
      </div>
      {children}
    </>
  );
};

export default Layout;
