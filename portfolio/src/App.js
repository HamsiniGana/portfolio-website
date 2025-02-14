import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Passport from './components/Passport'
import PassportCreation from './components/PassportCreation'
import Homepage from './components/Homepage'
import Portfolio from './components/Portfolio'

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
            <Route path='/passport' element={<Passport/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
        </Routes>
        </BrowserRouter>
      <footer>
      </footer>
    </div>
  );
}

export default App;