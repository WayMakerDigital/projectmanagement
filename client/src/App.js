import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Routes from "./AppRouter";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        {/* <Board /> */}
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
