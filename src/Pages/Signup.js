import { useContext, useEffect, useState } from 'react';
import SignUpForm from '../Components/SignUpForm';
import TopNavBar from '../Components/TopNavBar';
import './Styles.css'
import { UserContext } from '../Contexts/UserContexts';
import axios from 'axios';
import { baseUrl } from '../utils/baseurl';
const SignUp = () => {
    const [companies,setCompanies]=useState([])
    const {setLoading}=useContext(UserContext)
    useEffect(() => {
            setLoading(true)
            axios
              .get(`${baseUrl}/get/all/company`)
              .then(function (response) {
                if (response.data != "") {
                   setCompanies(response.data.data)
                   console.log(response.data.data)
                  setLoading(false);
                } else {
                    throw new Error(response.data.msg)
                }
              })
              .catch(function (error) {
                setLoading(false);
                console.log("FAILED!!! ", error);
              });
          }, []);
    return (  
        
          <div className=" h-screen  md:grid md:grid-cols-7 ">
          <div className="   md:col-span-5 ">
              
              <TopNavBar/>


              <div className=" flex items-center md-content-center  justify-center  ">
              <h2 className='sm:text-1xl text-2xl pl-5 text-[#61677A] text-center font-medium italic' >Welcome to Dock Management System !</h2>
              </div>
              <div className=" flex items-center md-content-center  justify-center mt-2">
              <h2 className="text-center text-3xl  font-medium">New Supplier Registration</h2>
              </div>
             
              {companies && <SignUpForm companies={companies}/>}
              
          </div>
          <div className=" bg-[#31304D] md:col-span-2 pb-14 ">
          <div className=" items-center md-content-center  justify-center mt-16 pt-16 mb-8">
        <h3 className="text-center text-3xl text-white mt-16  pt-16 font-medium ">Already registered?</h3>
       
      </div>

      <div className="mb-4 pb-12 text-center">
        <button
         onClick={()=>{
          window.location='/login'
         }}
          className="w-1/4 md:w-2/5 px-4 py-2 mb-5 bg-white justify-center rounded-3xl text-[#31304D] font-medium hover:bg-gray-200"
        >
         Login
        </button>
      </div>
          </div>
      </div>
    );
}
 
export default SignUp;

