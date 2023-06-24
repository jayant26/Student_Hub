import logo from './logo.svg';
import './App.css';
import { Home } from './Pages/Home';
import Main_page from './Pages/Main_page';
import { BrowserRouter as Router, Route, Redirect ,Routes, Navigate, Outlet} from "react-router-dom";
import { useState } from 'react';
import Createpost from './Components/Createpost';
import ViewPost from './Components/ViewPost';
import UpdatePost from './Components/UpdatePost';
import Profile from './Components/Profile';

const PrivateRoute =({isAuth})=>{

    return isAuth?
    <>
    <Outlet/>
    </>
    :<Navigate replace to ='/login'/>
}
function App() {
  const [isAuth,setisAuth]=useState(false);
  return (
      <Router>
        <Routes>
          <Route exact path='/login' element={<Home isuserAuth={setisAuth}/>}></Route>
          <Route path='/' element={<PrivateRoute isAuth={isAuth}/>}>
          <Route path='/' element={<Main_page/>}/>
          </Route>
          <Route path='/create' element={<PrivateRoute isAuth={isAuth}/>}>
          <Route path='/create' element={<Createpost/>}/>
          </Route>
          <Route path='/post/:id' element={<PrivateRoute isAuth={isAuth}/>}>
          <Route path='/post/:id' element={<ViewPost/>}/>
          </Route>
          <Route path='/update/:id' element={<PrivateRoute isAuth={isAuth}/>}>
          <Route path='/update/:id' element={<UpdatePost/>}/>
          </Route>
          <Route path='/profile/:id' element={<PrivateRoute isAuth={isAuth}/>}>
          <Route path='/profile/:id' element={<Profile/>}/>
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
