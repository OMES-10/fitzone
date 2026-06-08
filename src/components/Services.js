function Services({ setPage, setSelectedService }) {
  const services = [
    {
      title: "Coaching privé",
      description: "Séance personnalisée avec un coach.",
    },
    {
      title: "Cours collectifs",
      description: "HIIT, cardio, yoga et renforcement.",
    },
    {
      title: "Musculation libre",
      description: "Accès libre aux équipements FitZone.",
    },
  ];

  function chooseService(serviceName) {
    setSelectedService(serviceName);
    setPage("booking");
  }

  return (
    <>
      <section className="hero small-hero">
        <img src="/gym.jpg" alt="Choix du service FitZone" className="hero-image" />

        <div className="hero-overlay">
          <div className="hero-content">
            <h2>
              CHOISISSEZ <br />
              VOTRE SERVICE
            </h2>

            <div className="tagline">
              Sélectionnez votre service
            </div>
          </div>
        </div>
      </section>

      <main className="content">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button
              className="card-button"
              onClick={() => chooseService(service.title)}
            >
              Choisir
            </button>
          </div>
        ))}

        <div className="info-card">
          <p>Sélectionnez un service</p>
          <p>puis choisissez votre horaire</p>
        </div>
      </main>
    </>
  );
}

export default Services;