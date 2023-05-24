import './App.css';
import Home from './Pages/Home/Home';
import EventPage from './Pages/Events/EventsPage';
import AboutPage from './Pages/About/AboutPage';
import NavbarMain from './components/Navbar/NavbarMain';
import { RouterProvider, createBrowserRouter,Route,Routes} from "react-router-dom";
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import SideLeafBorder from './components/UI/SideLeafBorder'

export default function App() {
  const [isNavVisible, setNavVisible] = useState(true);
  const router = createBrowserRouter([
    {
      path: "/curryleaf",
      element: <Home setNavVisible={setNavVisible} />,
      children:[
        {
          path: "home",
          element: <Home setNavVisible={setNavVisible} />,
        },
        {
          path: "events",
          element: <EventPage setNavVisible={setNavVisible}/>,
        },
        {
          path: "about",
          element: <AboutPage setNavVisible={setNavVisible}/>,
        }
      ]

    }
 
   
  ]);

  return (

    <>
      {isNavVisible && <NavbarMain />}
      <SideLeafBorder left={true} right={true}>
        <div className={"page-container "+(()=>{if(isNavVisible) return ""; else return "mt-0";})()} >
        <Routes >
          <Route path="/" element={<Home setNavVisible={setNavVisible} />}/>
          <Route path="/about" element={<AboutPage  setNavVisible={setNavVisible}/>}/>
          <Route path="/events" element={<EventPage  setNavVisible={setNavVisible}/>}/>
        </Routes>
        
      </div>
    </SideLeafBorder >
      <Footer />
 </>
  );
}

