import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import CreateA from './components/CreateAccount/CreateA';
import ForgotPassword from './components/Forgot password/ForgotPassword';
import Candidatelogin from './components/Candidate/Auth/Candidatelogin';

import Home from './components/Home/Home';
import JoinAS from './components/JoinASFreelancer/JoinAS';
import PlatForm from './components/PlatformPage/PlatForm';
import Recruiter from './components/JoinRecruiter/Recruiter';
import NewHome from './components/Home/NewHome';
import Chatbot from './components/Chatbot/Chatbot';
// import Home from './components/Home/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/forgot' element={<ForgotPassword/>}/>
          <Route path='/candidate' element={<Candidatelogin/>}/>
          <Route path='/create' element={<CreateA/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/joinAS' element={<JoinAS/>}/>
          <Route path='/platform' element={<PlatForm/>}/>
          <Route path='/recruiter' element={<Recruiter/>}/>
          <Route path='/newUser' element={<NewHome/>}/>






        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
