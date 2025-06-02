import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import EventDetail from './pages/EventDetail';
import CreateEvent from './pages/CreateEvent';
import Home from './pages/Home';

import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/event/:id" element={<EventDetail />} />
            <Route path="/create" element={<CreateEvent />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
