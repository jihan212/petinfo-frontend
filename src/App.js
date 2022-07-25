import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homescreen from './Screens/Homescreen'
import Vetdetailscreen from './Screens/Vetdetailscreen'
import AboutScreen from './Screens/AboutScreen'
import APIscreen from './Screens/APIscreen'
import VetaddScreen from './Screens/VetaddScreen'
import RescueScreen from './Screens/RescueScreen'
import ServiceScreen from './Screens/ServiceScreen'
import BlogScreen from './Screens/BlogScreen'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Homescreen />} />
          <Route path='/details/:vetId' element={<Vetdetailscreen />} />
          <Route path='/about' element={<AboutScreen />} />
          <Route path='/API' element={<APIscreen />} />
          <Route path='/admin/vetadd' element={<VetaddScreen />} />
          <Route path='/rescue' element={<RescueScreen />} />
          <Route path='/services' element={<ServiceScreen />} />
          <Route path='/blogs' element={<BlogScreen />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
