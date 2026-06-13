function Confirmation({ selectedService, setPage }) {
  return (
    <main className="content">
      <div className="service-card">
        <h2>Réservation confirmée</h2>
        <p>Votre séance est bien réservée.</p>
      </div>

      <div className="service-card">
        <h3>Service choisi</h3>
        <p>{selectedService}</p>
      </div>

      <div className="service-card">
        <h3>Lieu</h3>
        <p>FitZone — Ottawa, ON</p>
      </div>

      <button className="main-button" onClick={() => setPage("home")}>
        Retour à l’accueil
      </button>
    </main>
  );
}

export default Confirmation;