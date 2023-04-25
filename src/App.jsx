import './App.css';
import { SearchPage } from './SearchPage';
import { Home } from './pages/Home';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
 return (
   <div className='app'>
    <Router>
       <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/search" element={<SearchPage/>} />
       </Routes>
    </Router>
   </div>
  )
}

export default App
