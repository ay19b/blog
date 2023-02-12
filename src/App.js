import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lap from './page/Lap';
import './App.css';
import Home from './page/home';
import Watch from "./page/watch";
import Ios from "./page/ios";
import Application from "./page/application";


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/Laptop">
            <Route index element={<Lap />} />
          </Route>
          <Route path="/Watch">
            <Route index element={<Watch />} />
          </Route>
          <Route path="/Ios">
            <Route index element={<Ios />} />
          </Route>
          <Route path="/Application">
            <Route index element={<Application />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
