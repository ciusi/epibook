import { Navbar, Nav, FormControl } from 'react-bootstrap';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import Switch from 'react-switch'; // Importa react-switch
import '../styles/MyNav.css';

const MyNav = ({ searchText, setSearchText }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar bg={theme} expand="lg" className={`custom-navbar ${theme}`}>
      <Navbar.Brand href="#home">Epibook</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-between align-items-center">
        <Nav className="mr-auto">
          <Nav.Link href="#home" className="mx-2">Home</Nav.Link>
          <Nav.Link href="#about" className="mx-2">About</Nav.Link>
          <Nav.Link href="#browse" className="mx-2">Browse</Nav.Link>
        </Nav>
        <FormControl
          type="text"
          placeholder="Cerca il titolo desiderato..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="ml-auto search-bar mx-3"
        />
        <div className="d-flex align-items-center">
          <label className="mr-2">{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
          <Switch
            onChange={toggleTheme}
            checked={theme === 'dark'}
            onColor="#000"
            offColor="#fff"
            checkedIcon={false}
            uncheckedIcon={false}
          />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNav;
