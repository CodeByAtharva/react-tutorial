import './App.css'
import Product from './Product'

function App() {
  

  return (
    <>
     <h1>Hello everyone!</h1>
     <Product name="Iphone 16" price={80000}></Product>
     <Product name="Samsung M15" price={70000}></Product>
     <Product name="Redmi S15" price={45000}></Product>
    </>
  )
}

export default App
