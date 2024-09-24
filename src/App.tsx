import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Signup from "./pages/signup/signup";
import Home from "./pages/home/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/auth/signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default App;
