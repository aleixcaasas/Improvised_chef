import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import Home from './Home';
import UserAuthC from './context/UserAuthC'

function App() {
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={ <Login/>}/>
          <Route  exact path="/register"element={<UserAuthC><Register/></UserAuthC>}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
