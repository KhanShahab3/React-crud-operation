import "./App.css";
import Insert from "./Components/Insert";
import { Delete } from "./Components/Delete";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InsertData from "./Components/InsertData";
import { Edit } from "./Components/Edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Insert />} />
        <Route path="/insert" element={<InsertData />} />
        <Route path="/delete/:id" element={<Delete />} />
        <Route path="/update/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
