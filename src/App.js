import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './component/Navbar';
import NewsContainer from './component/NewsContainer';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<NewsContainer  category="all"/>}> </Route>
      <Route path='/science' element={<NewsContainer  category="science"/>}> </Route>
      <Route path='/technology' element={<NewsContainer  category="technology"/>}> </Route>
      <Route path='/sports' element={<NewsContainer  category="sport"/>}> </Route>
      <Route path='/entertainment' element={<NewsContainer  category="entertainment"/>}> </Route>
      <Route path='/politics' element={<NewsContainer  category="politics"/>}> </Route>
      <Route path='/education' element={<NewsContainer  category="education"/>}> </Route>
      <Route path='/crime' element={<NewsContainer  category="crime"/>}> </Route>
      <Route path='/jokes' element={<NewsContainer  category="jokes"/>}> </Route>
    
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
