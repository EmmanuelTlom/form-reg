import logo from './logo.svg';
import './App.css';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Section4 from './components/section4';
import { Divider } from '@mui/material';
import Header from './components/header';

function App() {
  let year = new Date().getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      {/* <main> */}
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      {/* </main> */}
      <footer style={{paddingTop:'130px'}}>
        <Divider />
        <p className='footer'>
        &copy; PeopleBeam Technology LTD {year} , All rights Reserved{" "}
      </p>
      </footer>
    </div>
  );
}

export default App;
