
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/home/Home';
import AboutUs from './components/aboutUs/AboutUs';
import Layout from './Layout';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import CreateRecipe from './components/recipe/CreateRecipe';
import { useAuth } from './store/Auth';
import Profile from './components/profile/Profile';

function App() {
const {isLoggedIn}  = useAuth()
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route index element={<Home/>} /> 
          <Route path="about" element={<AboutUs/>} /> 
          {/* <Route path="" element={<Products/>} />  */}
          <Route path="signup" element={<Signup/>} /> 
          <Route path="login" element={<Login/>} /> 
          <Route path="createrecipe" element={<CreateRecipe/>} /> 
          <Route path="profile"
           element={isLoggedIn ? <Profile/> : <Navigate to = "/login"/>} /> 

          </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
