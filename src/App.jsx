import { useState } from "react";
import Aside from "./components/Aside";
import Login from "./components/Login";
import Main from "./components/Main";
import SideNavigation from "./components/SideNavigation";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      {!isAuthenticated ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <div className="grid h-screen grid-cols-[280px_auto_290px] gap-2 bg-grey-2 px-5">
          {<SideNavigation />}
          {<Main />}
          {<Aside />}
        </div>
      )}
    </div>
  );
}

export default App;
