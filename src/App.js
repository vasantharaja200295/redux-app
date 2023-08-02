import './App.css';
import Profile  from './components/profile';
import Login from './components/login';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App' >
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
