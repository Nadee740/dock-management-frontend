import LoginForm from '../Components/LoginForm';
import TopNavBar from '../Components/TopNavBar';
import './Styles.css'
import { Link } from "react-router-dom";

const Login = () => {
    return (  
        <div className="login-page">
        <TopNavBar/>
       <div className='pt-20 pb-20 flex flex-col items-center'>
        <h2 className='sm:text-1xl text-3xl pl-5  text-white font-bold'>Welcome to Dock Management System !</h2>
       </div>
       <LoginForm/>
      </div>
    );
}
 
export default Login;

