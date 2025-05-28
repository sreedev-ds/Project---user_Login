import './Login_Page.css'
import Login_LeftPage from './Components/Login_LeftPage'
import Login_RightPage from './Components/Login_RightPage'

function Login_Page() {
  return (
    
    
<div className= 'd-flex flex-row justify-content-evenly align-items-center' style={{height:"100vh"}}>
<div>
  <Login_LeftPage/>
</div>

<div>
  <Login_RightPage/>
</div>
</div>
  )
}

export default Login_Page