import './App.css'
import Product from './pages/Product'
import Home from './pages/Home'

import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'

function App() {
  

  return (
    <>

      <h1>This is main page</h1>

      <BrowserRouter>

      <ul>
        <li> <Link to="/home">Home</Link></li>
        <li><Link to="/product">Product</Link></li>
      </ul>

 
          <Routes>

            <Route  path='/home' element={<Home/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
          </Routes>

      </BrowserRouter>
    
    </>
  )
}

export default App
