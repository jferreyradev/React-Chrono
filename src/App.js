import './App.css';
import Chrono from './components/chrono/Chrono';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ract Chronometer</h1>
      </header>
      <main>
        <Chrono title="chrono 1" />
        <Chrono title="chrono 2" />
      </main>
    </div>
  )
}

export default App;
