import React, { useState, useContext } from 'react'; // Aggiungi useState qui
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import { ThemeContext } from './ThemeContext';
import { Container } from 'react-bootstrap'; // Importa Container

function App() {
  const [searchText, setSearchText] = useState('');
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <MyNav searchText={searchText} setSearchText={setSearchText} />
      <Container className="my-4">
        <Welcome />
        <AllTheBooks searchText={searchText} />
      </Container>
      <MyFooter />
    </div>
  );
}

export default App;
