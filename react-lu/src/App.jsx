import './App.css'
import Product from './Product'
import Home from './Home'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  

  return (
    <>

      <h1>This is main page</h1>

      <BrowserRouter>
          
          <Routes>

            <Route  path='/home' element={<Home/>}></Route>
            <Route path='/product' element={<Product/>}></Route>

          

          </Routes>

      </BrowserRouter>
    
    </>
  )
}

export default App
