import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/Home"
import EventDetails from "./pages/eventDetails/EventDetails";

function App() {

   return (
         <Router>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/event/:id" element={<EventDetails />} />
            </Routes>
         </Router>
   )


}

export default App
