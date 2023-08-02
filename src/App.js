import './App.css';
import Profile  from './components/profile';
import Login from './components/login';
import Logout from './components/logout';

function App() {
  return (
    <div >
      <Login/>
      <p>Hello</p>
      <Profile/>
      <Logout/>
    </div>
  );
}

export default App;
