import worldImage from './images/World-globe-clip-art-clipart-2-wikiclipart-wikiclipart.png'
function App() {
  return (
    <div className="App">
      <header>
        <title>My portfolio</title>
      </header>

      <nav>
        <ul>
          <li>Home</li>
          <li>About me</li>
          <li>Hobbies</li>
        </ul>
      </nav>

      <h4></h4>

      <section className="homepage">
        <h1 className="HomepageElement heading">
          Welcome to my world!
        </h1>
        <img className="HomepageElement worldImage" src={worldImage} alt='world image'></img>

        <h3 className="HomepageElement passportText"> Click here to get a visual passport to tour my world!</h3>
        
      </section>

      <footer>
      </footer>
    </div>
  );
}

export default App;