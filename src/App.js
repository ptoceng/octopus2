import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyInsights from "../src/pages/MyInsights/MyInsights";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyInsights />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
