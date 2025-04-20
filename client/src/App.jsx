import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthPage from "./pages/auth";
import HomePage from "./pages/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </>
  );
}

export default App;
