import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import LandingPage from './Landingpage';
import Navigation from './Navigation';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <LandingPage></LandingPage>
    </div>
  );
}

export default App;
