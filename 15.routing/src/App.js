import './App.css';
import { Route, Routes, useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';


// Buiding A Website with Home | About Us | Contact Us pages

function App() {
  // useRoutes Approach
  // const routes = [
  //   { path: '/', element: <Home /> },
  //   { path: '/about', element: <About /> },
  //   { path: '/contact', element: <Contact /> },
  //   { path: '*', element: <NotFound /> },
  // ];

  // let routesElement = useRoutes(routes);

  // return routesElement;

  // <Routes/> & <Route/> components Approach

  return (
    <>
      {/* NAVIGATION */}
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        {/* * - wildcard */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>

  );
}

export default App;
