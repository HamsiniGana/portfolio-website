import worldImage from './images/World-globe-clip-art-clipart-2-wikiclipart-wikiclipart.png'
// import Navbar from './components/Navigation'
import PassportCreate from './components/PassportCreation'
import Passport from './components/Passport'
function App() {
  return (
    <div className="App">
      <header>
        <title>My portfolio</title>
      </header>


      <h4></h4>

      <section className="homepage">
        <h1 className="HomepageElement heading1">
          Hello! I am Hamsini.
        </h1>
        <h1 className="HomepageElement heading2"> Welcome to my Portfolio world!</h1>
        <img className="HomepageElement worldImage" src={worldImage} alt='world image'></img>
        <h3 className="HomepageElement passportText"> Click here to get a visual passport to tour my world!</h3>
      </section>
        <PassportCreate/>
        <Passport />

      <footer>
      </footer>
    </div>
  );
}

export default App;