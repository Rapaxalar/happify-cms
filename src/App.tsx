import { HappifiersPage } from "./pages/happifiers";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import { HappifierPage } from "./pages/happifier";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/happifier/:id" element={<HappifierPage />} />
        <Route path="/" element={<HappifiersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
