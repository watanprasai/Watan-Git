import Navbar from "./components/Navbar";
import Users from "./components/UserCreate";
import ShowUser from "./components/ShowUser";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <Navbar></Navbar>
    <div>
      <Routes>
          <Route path="/" element={<Users />}/>
          <Route path="/to" element={<ShowUser />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
