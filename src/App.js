
import './App.css';
import Explore from './components/Explore';
import Navbar from './components/Navbar';
import Featured from './Featured';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Explore />
      <Featured />
    </div>
  );
}

export default App;
