import { Routes, Route} from 'react-router-dom'
import Login_Page from '../Pages/Login/Login_Page.jsx'
import Home_Page from '../Pages/Home/Home_Page.jsx'

function AppRoutes() {
  return (
    <div>
        
            <Routes>
                <Route path="/" element={<Login_Page/>}></Route>
                {/* <Route path="/Home" element={ <PrivateRoute></><Home_Page/></PrivateRoute>}></Route> */}
                <Route path='/Home' element={<Home_Page/>}></Route>
                <Route path='*' element={<Login_Page/>}></Route>
            </Routes>

    
    </div>
  )
}

export default AppRoutes