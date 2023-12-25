import "./App.css";
import Insert from "./Components/Insert";
import { Delete } from "./Components/Delete";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InsertData from "./Components/InsertData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Insert />} />
        <Route path="insert" element={<InsertData />} />
        <Route path="delete" element={<Delete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
