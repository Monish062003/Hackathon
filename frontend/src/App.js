import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Candidatelogin from './components/Candidate/Auth/Candidatelogin'
import CreateA from './components/CreateAccount/CreateA';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Candidatelogin/>}/>
          <Route path='/create' element={<CreateA/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
