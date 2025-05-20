import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import EventDetail from "./pages/EventDetail";
import CreateEvent from "./pages/CreateEvent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/event/:id" element={<EventDetail />} />
      <Route path="/create" element={<CreateEvent />} />
    </Routes>
  );
}
export default App;
