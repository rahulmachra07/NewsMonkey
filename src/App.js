// import logo from './logo.svg';
import './App.css';
import NewsComp from './components/newscomponents';
import NavBar from './components/navbar';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <hr className='hr'/>
        <Routes>
          <Route exact path="/" element={<NewsComp key="general" category="general" country ="in" pageSize={10}/>}/>
            <Route exact path="/business" element={<NewsComp key="business" category="business" country ="in" pageSize={10}/>}/> 
            <Route exact path="/entertainment" element={<NewsComp key="entertainment" category="entertainment" country ="in" pageSize={10}/>}/> 
            <Route exact path="/general" element={<NewsComp key="general" category="general" country ="in" pageSize={10}/>}/> 
            <Route exact path="/health" element={<NewsComp key="health" category="health" country ="in" pageSize={10}/>}/> 
            <Route exact path="/science" element={<NewsComp key="science" category="science" country ="in" pageSize={10}/>}/> 
            <Route exact path="/sports" element={<NewsComp key="sports" category="sports" country ="in" pageSize={10}/>}/>
            <Route exact path="/technology" element={<NewsComp key="technology" category="technology" country ="in" pageSize={10}/>}/>
            {/* <Route exact path="/about" element={<NewsComp category="about"/>}/>
            <Route exact path="/contact" element={<NewsComp category="contact"/>}/> */}
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
