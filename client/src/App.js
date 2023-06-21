import logo from './logo.svg';
import './App.css';
import { Home } from './Pages/Home';
import Main_page from './Pages/Main_page';
import { BrowserRouter as Router, Route, Redirect ,Routes} from "react-router-dom";
function App() {
  return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/home' element={<Main_page/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
