import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainApp = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainApp;
