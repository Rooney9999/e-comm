
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './Components/Signup';
import PrivateComponents from './Components/PrivateComponents';
import Login from './Components/Login';
import AddProduct from './Components/AddProducts';
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>

     <Routes>
     <Route  element={<PrivateComponents/>}>

      <Route path='/' element={<h1>helloe world</h1>}/>
      <Route path='/add' element={<AddProduct/>}/>
      <Route path='/update' element={<h1>helloe1 world</h1>}/>
      <Route path='/logout' element={<h1>helloe2 world</h1>}/>
      <Route path='/profile' element={<h1>helloe3 world</h1>}/>
      

      </Route>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login'element={<Login/>}/>
     </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
