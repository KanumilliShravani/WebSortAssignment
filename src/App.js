import {BrowserRouter,Routes,Route} from 'react-router-dom'

import './App.css';

import AboutUs from './components/AboutUs'

import Contact from './components/ContactUs';

import Careers from './components/Careers';

import Services from './components/Services';

import Projects from './components/Projects';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<AboutUs/>}/>
      <Route path="/careers"element={<Careers/>}/>
      <Route path='/services'element={<Services/>}/>
      <Route path="/contactUs" element={<Contact/>}/>
      <Route path="/projects" element={<Projects/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
