import './App.css';
import Mainpage from './Components/Main/main';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Details from './Components/secondpage/AllResults';
import ImagesC from './Components/secondpage/ImagesC';
import About from './Components/secondpage/About';
import ProjectsPage from './Components/secondpage/Project';
import Social from './Components/secondpage/Social';
import NotFound from './Components/secondpage/NotFound';


function App() {
  return (
    <BrowserRouter>
    <div className="App" style={{background:"#202124",minHeight:"100vh"}}>
      <Routes>
        <Route path='/' element={<Mainpage/>}/>
        <Route path='/Images' element={<ImagesC/>}/>
        <Route path='/Sanket' element={<Details/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Project' element={<ProjectsPage/>}/>
        <Route path='/Social' element={<Social/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
