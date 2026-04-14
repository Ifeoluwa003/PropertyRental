import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from "./pages/home/home"
import Propertylist from './pages/propertylist/propertylist'



function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/propertylist' element={<Propertylist/>}/>

      </Routes>
    
    </BrowserRouter>
  )
}

export default App
