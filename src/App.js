import React, {useState} from 'react';
import './css/App.css';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  const [query, setQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navSearch, setNavSearch] = useState(false);

  return (
    <div className='App'>
      <Nav
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navSearch={navSearch}
      />
      {!mobileMenuOpen && <Home />}
    </div>
  );
}

export default App;
