import SignUpForm from '../Components/SignUpForm';
import TopNavBar from '../Components/TopNavBar';
import './Styles.css'

const SignUp = () => {
    return (  
        <div className="signup-page">
         <TopNavBar/>
       <div className='pt-20 pb-20 flex flex-col items-center'>
        <h2 className='text-3xl text-white pl-5  font-bold'>New Supplier Registration</h2>
       </div>
       <SignUpForm/>
      </div>
    );
}
 
export default SignUp;

