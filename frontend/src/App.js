import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import CreateA from './components/CreateAccount/CreateA';
import ForgotPassword from './components/Forgot password/ForgotPassword';
import Candidatelogin from './components/Candidate/Auth/Candidatelogin';

import Home from './components/Home/Home';
import JoinAS from './components/JoinASFreelancer/JoinAS';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/crea' element={<CreateA/>}/>
          <Route path='/forgot' element={<ForgotPassword/>}/>
          <Route path='/candidate' element={<Candidatelogin/>}/>
          <Route path='/create' element={<CreateA/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/joinAS' element={<JoinAS/>}/>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
