import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import Events from './pages/Events';
import Members from './pages/Members';
import MemberDetail from './pages/MemberDetail';
import Header from './Components/Header';
import AdminLogin from './pages/AdminLogin';
import store from './Redux/Store';
import AdminDashboard from './pages/AdminDashboard';
import CreateEvent from './pages/CreateEvent';
import CreateGroup from './pages/CreateGroup';
import CreateMember from './pages/CreateMember';
import Group from './pages/Group';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Members" element={<Members />} />
          <Route path="/Members/:id" element={<MemberDetail />} />
          <Route path="/Groups" element={<Group />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/CreateEvent" element={<CreateEvent />} />
          <Route path="/CreateGroup" element={<CreateGroup />} />
          <Route path="/CreateMember" element={<CreateMember />} />
        </Routes>
      </Router>
    </Provider>
  );
}
export default App;
