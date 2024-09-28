import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/About';
// import Profile from './components/Profile';
import Registeration from './components/Registeration';
import Signin from './components/Signin';

const App = () => {
  return (
 
        <Router >
          <div className='w-full max-h-max bg-slate-500 pb-4'>
            <ul className='flex text-white gap-7 font-bold text-2xl p-4'>
                <li>
                    <Link to="/signin">About</Link>
                </li>
               
                <li>
                <Link to="/signin">Login</Link>

                </li>
                <li>

                <Link to="/registeration">Registration</Link>
                </li>
            </ul>
            </div>
          <Routes>
               
               <Route path="/signin" element={<Signin/>}/>
               <Route path="/login" element={<About/>}/>
               {/* <Route path="/profile" element={<Profile/>}/> */}
               <Route path="/registeration" element={<Registeration/>}/>
          </Routes>
        </Router>
    

  )
}

export default App
