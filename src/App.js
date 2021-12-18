import './App.css';
import {Route} from 'react-router-dom'
import Home from './components/Home';
import NavBar from './components/NavBar';
import Result from './components/Result';
import AboutUs from './components/AboutUs';



function App() {
  return (
    <>
      <NavBar/>
      <Route exact path='/' component={Home} ></Route>
      <Route exact path='/about-us' component={AboutUs}></Route>
    </>
  );
}

export default App;
