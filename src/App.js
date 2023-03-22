import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Navbar from './component/Navbar';
import NewsContainer from './component/NewsContainer';
import Navbar from './component/Navbar';


function App() {
  
  return (
    <>
    <BrowserRouter> 
    
      <Navbar/>
    <Routes>
      <Route path='/' element={<NewsContainer  category="nation" language="lang=en"/>}> </Route>
      <Route path='/science' element={<NewsContainer  category="science" language="lang=en"/>}> </Route>
      <Route path='/technology' element={<NewsContainer  category="technology" language="lang=en"/>}> </Route>
      <Route path='/sports' element={<NewsContainer  category="sports" language="lang=en"/>}> </Route>
      <Route path='/entertainment' element={<NewsContainer  category="entertainment" language="lang=en"/>}> </Route>
      <Route path='/politics' element={<NewsContainer  category="politics" language="lang=en"/>}> </Route>
      <Route path='/health' element={<NewsContainer  category="health" language="lang=en"/>}> </Route>
      {/* <Route path='/food' element={<NewsContainer  category="food" language="lang=en"/>}> </Route>
      <Route path='/environment' element={<NewsContainer  category="environment" language="lang=en"/>}> </Route> */}

      <Route path='/hi-science' element={<NewsContainer  category="science" language="lang=hi"/>}> </Route>
      <Route path='/hi-technology' element={<NewsContainer  category="technology" language="lang=hi"/>}> </Route>
      <Route path='/hi-sports' element={<NewsContainer  category="sports" language="lang=hi"/>}> </Route>
      <Route path='/hi-entertainment' element={<NewsContainer  category="entertainment" language="lang=hi"/>}> </Route>
      <Route path='/hi-politics' element={<NewsContainer  category="politics" language="lang=hi"/>}> </Route>
      <Route path='/hi-health' element={<NewsContainer  category="health" language="lang=hi"/>}> </Route>
      {/* <Route path='/hi-food' element={<NewsContainer  category="food" language="lang=hi"/>}> </Route>
      <Route path='/hi-environment' element={<NewsContainer  category="environment" language="lang=hi"/>}> </Route>hi- */}

    
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
