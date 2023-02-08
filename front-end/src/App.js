import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import VerticalNav from './components/VerticalNav';
import HorizontalNav from './components/HorizontalNav';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';


import NotFound from './pages/NotFound';
import  ApiContextProvider from './utils/contexts/ApiContext'

function App() {
 
  return (
    <ApiContextProvider>
    <Router>
        <div className="App">
            <HorizontalNav />
            <VerticalNav />
            <div className='container'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/user' element={<Dashboard />} />
                <Route path='/user/:userId' element={<Dashboard />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </div>
        </div>
    </Router>
  </ApiContextProvider>  
  );
}

export default App;
