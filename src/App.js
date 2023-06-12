import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import HomeComponent from './components/HomeComponent/HomeComponent';
import AboutUsComponent from './components/AboutUsComponent/AboutUsComponent';
import ContactUsComponent from './components/ContactUsComponent/ContactUsComponent';
import BookTripComponent from './components/BookTripComponent/BookTripComponent';

function App() {
  return (
    <Router>
    <div className="App">
      <HeaderComponent/>
      
        <Routes>
          <Route exact path='/' element={<HomeComponent/>}/>
          <Route exact path='/about' element={<AboutUsComponent/>}/>
          <Route exact path='/contact' element={<ContactUsComponent/>}/>
          <Route exact path='/book' element={<BookTripComponent/>  }/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
