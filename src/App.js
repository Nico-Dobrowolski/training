import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import People from './views/People/People';

function App() {
  return (
    <Routes>
      <Route path="/" element={<People />} />
      <Route path="/people/:id" element={<People />} />
    </Routes>
  );
}

export default App;
