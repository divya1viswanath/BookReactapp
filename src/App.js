import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Addbook from './component/Addbook';
import Booksearch from './component/Booksearch';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewbooks from './component/Viewbooks';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'exact element={<Addbook/>}/>
          <Route path='/search'exact element={<Booksearch/>}/>  
          <Route path='/viewbooks'exact element={<Viewbooks/>}/>
        </Routes>                                                                                   
      </BrowserRouter>
    </>
  );
}

export default App;
