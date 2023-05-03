import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Career from './pages/Career';
import Education from './pages/Education';
import Books from './pages/Books';
import BookDetails from './pages/BookDetails';


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
    <div>
      {/* NAVIGATION */}
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}>
          <Route path='/about/career' element={<Career />} />
          <Route path='/about/education' element={<Education />}/>
        </Route>
        <Route path='/books' element={<Books />}>
          <Route path="/books/:id" element={<BookDetails />}  />
        </Route>
        <Route path='/contact' element={<Contact />} />

        {/* * - wildcard */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>

  );
}

export default App;
