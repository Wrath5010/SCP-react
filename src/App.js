import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './nav.js';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';
import './app.css'
import ComponentFour from './ComponentFour.js';
import ComponentFive from './ComponentFive.js';
import image from './images/SCPIogo.webp'

function Home(){
  return(
    <div className="container">
      <div class="HomeTitle">
        <img src={image} class="TitleIMG" alt=''/>
        <h1 class="SCPfoundation">SCP Foundation</h1>
          <p class="Documentpaper">Welcome to the SCP Foundation, where the mysterious and the extraordinary converge. Delve into a world where anomalies challenge the very fabric of reality, and secrecy is paramount. As custodians of the unexplainable, we safeguard humanity from the unknown, containing anomalies that defy logic and comprehension. Explore our vast archive of anomalous entities, artifacts, and phenomena, each with its own story waiting to be uncovered. Whether you're a curious bystander or a seasoned researcher, join us in unraveling the enigmatic mysteries that lie within the SCP Foundation.<br></br><br></br>

          Step beyond the veil of normalcy and embark on a journey into the depths of the unknown. Within our classified facilities, dedicated personnel work tirelessly to study, understand, and contain anomalies, ensuring the safety of the world at large. But be warned, not all anomalies can be easily controlled, and some pose significant threats to humanity's very existence. With each discovery comes new questions, new challenges, and new dangers. Yet, through collaboration, diligence, and unwavering resolve, we strive to protect and preserve the fragile balance between the ordinary and the anomalous. Welcome to the SCP Foundation – where the extraordinary is our reality, and the pursuit of knowledge knows no bounds.
          </p>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/ComponentOne" element={<ComponentOne />} />
          <Route path="/ComponentTwo" element={<ComponentTwo />} />
          <Route path="/ComponentThree" element={<ComponentThree />} />
          <Route path="/ComponentFour" element={<ComponentFour/>} />
          <Route path="/ComponentFive" element={<ComponentFive/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
