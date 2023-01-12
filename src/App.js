import "./App.css";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import CreateProject from "./Pages/CreateProject";
import Donate from "./Pages/Donate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/createProject" element={<CreateProject/>}/>
          <Route path="/donate" element={<Donate/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
