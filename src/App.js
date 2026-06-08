import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Booking from "./components/Booking";
import Confirmation from "./components/Confirmation";

function App() {
  const [page, setPage] = useState("home");
  const [selectedService, setSelectedService] = useState("Coaching privé");

  return (
    <div className="page">
      <Navbar setPage={setPage} />

      {page === "home" && (
        <Home setPage={setPage} />
      )}

      {page === "services" && (
        <Services
          setPage={setPage}
          setSelectedService={setSelectedService}
        />
      )}

      {page === "booking" && (
        <Booking
          selectedService={selectedService}
          setPage={setPage}
        />
      )}

      {page === "confirmation" && (
        <Confirmation
          selectedService={selectedService}
          setPage={setPage}
        />
      )}
    </div>
  );
}

export default App;