import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">VYUHA OPTIMIZER</div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#vyuha">Vyuha Explorer</a>
          <a href="#battle">Battle Simulator</a>
          <a href="#optimizer">Optimizer</a>
          <a href="#game">Strategy Game</a>
        </div>
      </nav>

      <main className="hero">
        <p className="tag">ANCIENT STRATEGY × MODERN COMPUTATION</p>

        <h1>
          Vyuha
          <br />
          <span>Optimizer</span>
        </h1>

        <p className="description">
          Explore strategic formations, simulate battles, and discover
          optimized strategies through computational simulation.
        </p>

        <div className="buttons">
          <button>Explore Vyuhas</button>
          <button className="secondary">Start Simulation</button>
        </div>
      </main>

      <section className="modules">
        <div>
          <h3>📜 Vyuha Explorer</h3>
          <p>Explore strategic formations.</p>
        </div>

        <div>
          <h3>⚔️ Battle Simulator</h3>
          <p>Test formations against attacks.</p>
        </div>

        <div>
          <h3>🧠 Optimizer</h3>
          <p>Compare and optimize strategies.</p>
        </div>

        <div>
          <h3>🎮 Strategy Game</h3>
          <p>Experience strategic decision-making.</p>
        </div>
      </section>
    </div>
  )
}

export default App