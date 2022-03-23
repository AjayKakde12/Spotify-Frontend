import './App.css';
import Home from './components/Content/Home';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchMenu from './components/Content/SearchMenu';
import LibraryMenu from './components/Content/LibraryMenu';
import Signup from './components/User/Signup';

function App() {
  return (
    <div className="App">
      <>
      <Router>
          <Sidebar />
          <Routes>
            <Route path='/register' element={<Signup />} />
            <Route path='/search' element={< SearchMenu />} />
            <Route path="/my-library" element={<LibraryMenu />} />
            <Route exact path='/' element={< Home />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
