import './App.css';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from './components/Home';
import View from './components/View';
import Edit from './components/Edit';

function App() {
  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/view/:id' Component={View} />
      <Route path='/edit/:id' Component={Edit} />
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;