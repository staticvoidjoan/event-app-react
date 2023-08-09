import './App.css';
import { useLocation } from 'react-router-dom'; // Import useLocation
import NavBar from "./layout/NavBar" 
import Home from './Pages/Home/Home';
import Event from "./Pages/Event/Event"
import { Route, Routes } from "react-router-dom"
import background from "./assets/concert2.jpeg"
function App() {
  const location = useLocation();
  const hideNavBar = location.pathname === '/event';

  return (
    <>
    
      {!hideNavBar && <NavBar />} {/* If we are not on the event page we can render the navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />}/>
      </Routes>
    </>
  );
}

export default App;
