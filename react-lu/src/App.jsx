import './App.css'
import Product from './pages/Product'
import Home from './pages/Home'
import Profile from './pages/Profile'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'

function App() {
  

  return (
    <>

      <h1>This is main page</h1>

      <BrowserRouter>

      <ul className='box'>
        <li> <Link to="/home">Home</Link></li>
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/profile">profile</Link></li>
      </ul>

 
          <Routes>

            <Route  path='/home' element={<Home/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
          </Routes>

      </BrowserRouter>
    
    </>
  )
}

export default App
