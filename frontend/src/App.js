import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './components/Recruitor/Auth/Login';
import Candidatelogin from './components/Candidate/Auth/Candidatelogin';
import Nav from './components/Navbar/Nav';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />

        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/can' element={<Candidatelogin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
