import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import CreateA from './components/CreateAccount/CreateA';
import Candidatelogin from './components/Candidate/Auth/Candidatelogin';
import Home from './components/Home/Home';
import JoinAS from './components/JoinASFreelancer/JoinAS';
import Craccount2 from './components/account2/Craccount2';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/createaccount' element={<CreateA/>}/>
          <Route path='/login' element={<Candidatelogin/>}/>
          <Route path='/createaccount' element={<CreateA/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/joinAS' element={<JoinAS/>}/>
          <Route path='/createaccount2' element={<Craccount2/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
