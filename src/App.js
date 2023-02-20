import './App.css';
import { Routes, Route } from "react-router-dom"
import Master from './layouts/Master';
import Home  from './page/Home';
import Products from './page/Products';
import Abooutus from './page/Abooutus';

function App() {
  return (

    <Routes>

      <Route path="/" element={<Master></Master>}>
        <Route path="" element={<Home></Home>}></Route>
        <Route path='/Products' element={<Products></Products>}></Route>
        <Route path='/Abooutus' element={<Abooutus></Abooutus>}></Route>
      </Route>
    
    </Routes>

  );
}

export default App;
   