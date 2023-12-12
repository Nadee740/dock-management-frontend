import LoginForm from '../Components/LoginForm';
import TopNavBar from '../Components/TopNavBar';
import './Styles.css'
import { Link } from "react-router-dom";

const Login = () => {
    return (  
        <div className=" h-screen  md:grid md:grid-cols-7 ">
            <div className=" md:col-span-5 ">
                
                <TopNavBar/>


                <div className=" flex items-center md-content-center  justify-center mt-10 pt-14 ">
                <h2 className='sm:text-1xl text-2xl pl-5 text-[#31304D]  text-center mb-2 font-medium italic' >Welcome to Dock Management System !</h2>
                </div>
                <div className=" flex items-center md-content-center  justify-center mt-8">
                <h2 className="text-center text-3xl  font-medium">Login to Your Account</h2>
                </div>
               
                <LoginForm/>
                
            </div>
            <div className=" bg-[#31304D] md:col-span-2 pb-14 ">
            <div className=" items-center md-content-center  justify-center mt-14 pt-14 mb-8">
          <h3 className="text-center text-3xl text-white mt-10  pt-16 font-medium ">New Here?</h3>
          <p className="text-center  text-white text-base pt-4">
            Sign up and discover a great 
          </p>
          <p className="text-center  text-white text-base ">
          amount of new opportunities!
          </p>
        </div>

        <div className="mb-4 pb-12 text-center">
          <button
           onClick={()=>{
            window.location='/signup'
           }}
            className="w-1/4 md:w-2/5 px-4 py-2 mb-5 bg-white justify-center rounded-3xl text-[#31304D]  font-medium hover:bg-violet-100"
          >
            Sign Up
          </button>
        </div>
            </div>
        </div>
    );
}
 
export default Login;

