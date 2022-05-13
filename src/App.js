import { BrowserRouter, Routes, Route } from "react-router-dom";


import DataB from "./pages/DataBinding.jsx";
import Home from "./pages/Home.jsx";
import Detail from "./pages/Detail";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Data" element={<DataB/>}/>
          <Route path="/Detail" element={<Detail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
