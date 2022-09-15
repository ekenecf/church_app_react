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
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </Provider>
  );
}
export default App;
