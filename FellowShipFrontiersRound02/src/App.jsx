import Follow from "./components/Follow";
import Landing from "./components/Landing"
import Navbar from "./components/Navbar"
import Page2 from "./components/Page2"
import Page3 from "./components/Page3";
import Sidenav from "./components/Sidenav"
import LocomotiveScroll from 'locomotive-scroll';
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer.jsx"
import Loader from "./components/Loader.jsx";
const locomotiveScroll = new LocomotiveScroll();


function App() {

  return (
     <>
      <div>
      <Navbar/>
      <Sidenav/>
      <Landing />
      <Page2/>
      <Page3/>
      <Subscribe/>
      <Follow />
      <Footer/>
      </div>
     </>
  )
}

export default App
