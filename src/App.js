import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Members from './pages/Members';
import MemberDetail from './pages/MemberDetail';
import Header from './Components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Members" element={<Members />} />
        <Route path="/Members/:id" element={<MemberDetail />} />
      </Routes>
    </Router>
  );
}
export default App;
