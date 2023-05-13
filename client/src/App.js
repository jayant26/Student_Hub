import logo from './logo.svg';
import './App.css';
import { Home } from './Pages/Home';
import { BrowserRouter as Router, Route, Redirect ,Routes} from "react-router-dom";
function App() {
  return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
