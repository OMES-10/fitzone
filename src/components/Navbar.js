function Navbar({ setPage }) {
  return (
    <header className="navbar">
      <h1 onClick={() => setPage("home")}>FitZone</h1>
      <button onClick={() => setPage("home")}>Accueil</button>
    </header>
  );
}

export default Navbar;