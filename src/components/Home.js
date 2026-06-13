function Home({ setPage }) {
  return (
    <>
      <section className="hero">
        <img src="/gym.jpg" alt="Salle de sport FitZone" className="hero-image" />

        <div className="hero-overlay">
          <div className="hero-content">
            <h2>
              ENTRAÎNEZ-VOUS <br />
              AVEC DES PROS
            </h2>

            <div className="tagline">
              Coaching privé • cours collectifs • musculation
            </div>
          </div>
        </div>
      </section>

      <main className="content">
        <div className="service-card">
          <h3>Coaching privé</h3>
          <p>Programme personnalisé avec un coach.</p>
        </div>

        <div className="service-card">
          <h3>Cours collectifs</h3>
          <p>HIIT, cardio, yoga et renforcement.</p>
        </div>

        <div className="service-card">
          <h3>Musculation libre</h3>
          <p>Accès aux équipements 7j/7.</p>
        </div>

        <button className="main-button" onClick={() => setPage("services")}>
          Réservez maintenant
        </button>

        <div className="info-card">
  <p>FitZone — Centre sportif / Gym</p>
  <p>Ouvert 7j/7 · 8h à 22h</p>
  <p>Ottawa, ON</p>
  <p>Téléphone : 613-000-0000</p>
  <p>Email : contact@fitzone.ca</p>
  <p>Conçu par Marc Olloe</p>
</div>
      </main>
    </>
  );
}

export default Home;