import './App.css';
import Home from './Pages/Home/Home';
import EventPage from './Pages/Events/EventsPage';
import AboutPage from './Pages/About/AboutPage';
import NavbarMain from './components/Navbar/NavbarMain';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import SideLeafBorder from './components/UI/SideLeafBorder'
export default function App() {
  const [isNavVisible, setNavVisible] = useState(true);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home setNavVisible={setNavVisible} />,
    },
    {
      path: "/events",
      element: <EventPage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    }
  ]);

  return (

    <>
      {isNavVisible && <NavbarMain />}
      <SideLeafBorder left={true} right={true}>
        <div className={"page-container "+(()=>{if(isNavVisible) return ""; else return "mt-0";})()} >
        <RouterProvider router={router} />
      </div>
    </SideLeafBorder >
      <Footer />
 </>
  );
}

