// import Navbar from './components/Navigation'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Passport from './components/Passport'
import PassportCreation from './components/PassportCreation'
import Homepage from './components/Homepage'

function App() {
  return (
    <div className="App">
      <header>
        <title>My portfolio</title>
      </header>

      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/passportApplication' element={<PassportCreation/>}/>
        </Routes>
        </BrowserRouter>
      <footer>
      </footer>
    </div>
  );
}

export default App;