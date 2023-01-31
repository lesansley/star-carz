import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <hr />
      {children}
    </>
  );
};

export default Layout;
