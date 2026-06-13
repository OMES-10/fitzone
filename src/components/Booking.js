function Booking({ selectedService, setPage }) {
  return (
    <main className="content">
      <div className="form-card">
        <h2>Réserver une séance</h2>

        <p>Service choisi : {selectedService}</p>

        <label>Votre nom</label>
        <input type="text" placeholder="Ex: Marc" />

        <label>Date</label>
        <input type="date" />

        <label>Heure</label>
        <input type="time" />

        <button className="main-button" onClick={() => setPage("confirmation")}>
          Confirmer
        </button>

        <button className="card-button" onClick={() => setPage("services")}>
          Retour
        </button>
      </div>
    </main>
  );
}

export default Booking;