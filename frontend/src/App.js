import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Nav from './components/Navbar/Nav';
import CreateA from './components/CreateAccount/CreateA';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />

        <Routes>
          <Route path='/create' element={<CreateA/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
