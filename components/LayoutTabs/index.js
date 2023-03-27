import Tabs from "../Tabs";

const Layout = ({ idTab, children }) => {
  return (
    <div className="flex flex-wrap md:w-full md:mx-auto">
      <div className="w-full">
        <Tabs idTab={idTab} />
      </div>
      {children}
    </div>
  );
};

export default Layout;
