import { BrowserRouter as Router, Routes, Route } from "react-router-dom";import "./App.css";
import PostingQuestion from "./components/Posting";
import Landing from "./components/Landing";
import GetQuestion from "./components/GetQuestion";
import NavBar from "./components/NavBar";
import TestType from "./components/TestType";

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Landing/>}></Route>
          <Route path="/post" element={<PostingQuestion />}></Route>
          <Route path="/get" element={<TestType />}></Route>
          <Route path="/get/:testType" element={<GetQuestion />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
