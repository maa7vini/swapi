import './App.css';
import Chewbacca from './components/Chewbacca/Chewbacca';
import LeiaOrgana from './components/Leia Organa/LeiaOrgana';
import Lukeskywalker from './components/Luke Skywalker/Lukeskywalker';

function App() {
  return (
    <div className="App">
      <Lukeskywalker></Lukeskywalker>

      <LeiaOrgana></LeiaOrgana>

      <Chewbacca></Chewbacca>
    </div>
  );
}

export default App;
