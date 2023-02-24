import './App.css';
import Mainpage from './Components/Main/main';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Details from './Components/secondpage/Details';

function App() {
  return (
    <BrowserRouter>
    <div className="App" style={{background:"#202124",height:"100vh"}}>
      <Routes>
        <Route path='/' element={<Mainpage/>}/>
        <Route path='/:id' element={<Details/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
