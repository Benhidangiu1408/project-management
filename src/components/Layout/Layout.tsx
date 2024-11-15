import { Outlet } from "react-router-dom";
import { createContext, useContext } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const AppContext = createContext({});
const useAppContext = () => {
    return useContext(AppContext);
  };

const Layout = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header/>
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer/>
        </div>
      );
    
}

export default Layout;
