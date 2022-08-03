import './App.css';
import Dialogs from './components/dialogs/Dialogs';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { Profile } from './components/profile/Profile';
import { Route, BrowserRouter, Routes } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div className="Wrapper">
        <Header />
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/dialogs/*' element={<Dialogs />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;