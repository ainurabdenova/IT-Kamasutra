import './App.css';
import { Header } from './components/Header';
import { NavBAr } from './components/NavBAr';
import { Profile } from './components/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBAr />
      <Profile />
    </div>
  );
}

export default App;
