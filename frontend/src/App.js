import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import CreateA from './components/CreateAccount/CreateA';
import ForgotPassword from './components/Forgot password/ForgotPassword';
import Candidatelogin from './components/Candidate/Auth/Candidatelogin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/crea' element={<CreateA/>}/>
          <Route path='/forgot' element={<ForgotPassword/>}/>
          <Route path='/candidate' element={<Candidatelogin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
