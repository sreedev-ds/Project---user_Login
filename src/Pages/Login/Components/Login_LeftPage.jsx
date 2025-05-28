import Login_Footer from './Login_Footer'
import Login_Header from './Login_Header'
import Login_Section from './Login_Section'

function Login_LeftPage() {
  return (
            <div>

            <div className='d-flex flex-column'>
        <header>
            <Login_Header/>
        </header>
        <section>
            
          <Login_Section/>

            </section>
          </div>

            <footer>

                <Login_Footer/>


            </footer>
        


</div>
  )
}

export default Login_LeftPage