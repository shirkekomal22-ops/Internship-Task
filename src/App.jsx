import { BrowserRouter, Routes, Route } from "react-router-dom";
import DPRForm from "./pages/DPRForm.jsx";
import Login from "./pages/Login.jsx";
import Projects from "./pages/Projects.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/dpr" element={<DPRForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;