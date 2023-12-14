import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Nav from './components/Navbar/Nav';
import CreateA from './components/CreateAccount/CreateA';
import Home from './components/Home/Home';
import JoinAS from './components/JoinASFreelancer/JoinAS';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path='/create' element={<CreateA/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/joinAS' element={<JoinAS/>}/>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
