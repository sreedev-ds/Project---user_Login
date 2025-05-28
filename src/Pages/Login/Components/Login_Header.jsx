import { Link } from "react-router-dom"
import './Login_Header.css'

function Login_Header() {
  return (
    <div>
    <div>

        <h3>Sign In</h3>
           
     </div>
      <span>New user?</span><span className='ms-2' ><Link to='/' className="link_style">Create an account</Link></span>

    </div>
  )
}

export default Login_Header