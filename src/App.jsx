import { Routes, Route} from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/Home";
import Result from "./pages/Result";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/result/:cvr" element={<Result />}/>
      </Routes>
      <Analytics />
    </>
  );
}

export default App;