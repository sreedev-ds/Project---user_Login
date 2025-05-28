import {Button} from 'react-bootstrap'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {validatePassword} from '../Utils-Validation/Login_Validation.jsx'


function Login_Section() {

        const[username, setUsername] = useState('')
        const[password, setPassword] = useState('')
        const navigate = useNavigate()
        const [error, setError] = useState('')
        function handleChange(e){
            e.preventDefault()

                 const errorMessage = validatePassword(password); // ✅ call utility function

    if (errorMessage) {
      setError(errorMessage);
      return;
    }
                           setError('')
                           setPassword('')
                           setUsername('')
                           navigate('/Home');
                }


        
  return (
    <div>
        <form onSubmit={handleChange} className='d-flex flex-column '>
                <input type="text" placeholder="Username or email" className="mt-3 custom-input" onChange={(e)=>{setUsername(e.target.value)}}/>
                <input type="password" placeholder="Password" className="mt-2 custom-input" onChange={(e)=>{setPassword(e.target.value)}}/><br/>
                        {error &&   <p className="text-danger mt-2 text-wrap small" style={{ maxWidth: "100%", wordWrap: "break-word" }}>{error}</p>}
                <div className="mt-2">
                <input type="checkbox" /><span className='ms-2'>keep me signed in</span>
                </div>
                <Button  type='submit' className='rounded-0 mt-2' variant='light' size='sm' style={{backgroundColor:"#4e4f4e", width:'300px', color:'white'}}> Sign In</Button>
            </form>
    </div>
  )
}

export default Login_Section