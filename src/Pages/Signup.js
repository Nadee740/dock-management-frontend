import { useContext, useEffect, useState } from 'react';
import SignUpForm from '../Components/SignUpForm';
import TopNavBar from '../Components/TopNavBar';
import './Styles.css'
import { UserContext } from '../Contexts/UserContexts';
import axios from 'axios';
import { baseUrl } from '../utils/baseurl';
const SignUp = () => {
    const [building,setBuildings]=useState([])
    const {setLoading}=useContext(UserContext)
    useEffect(() => {
            setLoading(true)
            axios
              .get(`${baseUrl}/subscription/get/buildings`)
              .then(function (response) {
                if (response.data != "") {
                   setBuildings(response.data.data)
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
        <div className="signup-page">
         <TopNavBar/>
       <div className='pt-20 pb-20 flex flex-col items-center'>
        <h2 className='text-3xl text-white pl-5  font-bold'>New Supplier Registration</h2>
       </div>
       {building && <SignUpForm buildings={building}/>}
      </div>
    );
}
 
export default SignUp;

