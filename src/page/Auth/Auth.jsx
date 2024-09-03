import './Auth.css'
import SignUp from './SignUp'
import { Button } from '../../components/ui/button'
import { useLocation, useNavigate } from 'react-router-dom'
import ForgotPassword from './ForgotPassword'
import SignIn from './SignIn'



const Auth = () => {

    const navigate = useNavigate()
    const location=useLocation()
  return (
    <div className='h-screen relative authContainer'>
     <div className='absolute top-0 right-0 left-0 bottom-0 bg-[#030712] bg-opacity-50'>
     <div className='bgBlure absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center h-[35rem]  w-[30rem]  rounded-md z-50 bg-black bg-opacity-50 shadow-2xl shadow-white px-10'>
  <h1 className='text-6xl font-bold pb-9'>TradeZenith</h1>
 { location.pathname=="/signup"?<section className='w-full'>
<SignUp/>
<div className='flex items-center justify-center'>
<span>Have already an account?</span>
<Button onClick={()=>navigate("/signin")} variant="ghost">
    SignIn
</Button>
</div>
  </section>:location.pathname=="/forgot-password"?<section className='w-full'>

  <ForgotPassword/>
  <div className='flex items-center justify-center  mt-2'>
<span>Back to login</span>
<Button onClick={()=>navigate("/signin")} variant="ghost">
    SignIn
</Button>
</div>
  </section>:
  <section className='w-full'>
  <SignIn/>
  <div className='flex items-center justify-center'>
<span>Don't have an account?</span>
<Button onClick={()=>navigate("/signup")} variant="ghost">
    SignUp
</Button>
</div>

<div className='mt-10'>
<Button className='w-full'onClick={()=>navigate("/forgot-password")} variant="outline">
    Forgot Password
</Button>
</div>
  </section>}
     </div>

     </div>
    </div>
  )
}

export default Auth
