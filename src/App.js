import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Addbook from './component/Addbook';
import Booksearch from './component/Booksearch';

function App() {
  return (
    <>
      <Addbook/>
      <Booksearch/>
    </>
  );
}

export default App;
