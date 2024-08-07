import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Layout = () => {
  return (
    // <div className="flex flex-col px-20 py-12 gap-8 min-h-screen">
    <div className="gap-8 min-h-screen font-mono">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
