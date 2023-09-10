import {useContext, useEffect, useState} from "react"
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Features from "../Components/Features/Features";
import SubscriptionAdminDashboard from "../Components/subscription";
import Footer from "../Components/Footer/Footer";
import { UserContext } from "../Contexts/UserContexts";
import axios from "axios";
import { baseUrl } from "../utils/baseurl";
const LandingPage = () => {
    const {setLoading}=useContext(UserContext)
    const [subscriptionTypes,setSubscriptionTypes]=useState([]);
    useEffect(()=>{
        setLoading(true);
        axios.get(`${baseUrl}/subscription/get/types`)
        .then((res) => {
            if(res.data.status=="ok")
            {
            setSubscriptionTypes(res.data.data);
            setLoading(false);
            }
            
        else 
        throw new Error(res.data.msg)
        })
        .catch((err) => {
            // setLoading(false);
            console.log(err)

        });
    },[])
    return (  
        <div className="">
        <Navbar/>
      <Hero />
      <Features/>
      {subscriptionTypes && <SubscriptionAdminDashboard subscriptionTypes={subscriptionTypes}/>}
      <Footer/>
        </div>
    );
}
 
export default LandingPage;