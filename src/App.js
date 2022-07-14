import { Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import Error from "./components/pages/Error";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
