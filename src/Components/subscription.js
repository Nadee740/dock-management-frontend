import { faCheck, faMailReply, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SubscriptionAdminDashboard = ({subscriptionTypes}) => {
    return (  
        <body>
    <div class="flex items-center justify-center flex-col mb-10">
        <div class="bg-[#F4F5FA] p-10 rounded-xl">

            <div class="flex flex-col justify-center items-center text-center">
                <div class="max-w-sm font-bold font-sans">
                    Get the most out of with the right subscription
                </div>
                <div class="font-light max-w-lg mt-5 text-sm">
                    We provide Flexible subscription to Users
                </div>
            </div>
            <div
                class="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
                {
                    subscriptionTypes.map((type,index)=>{
                        return(
                            <div class="bg-[#FFFBEC] rounded-xl">
                    <div class="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ice_logo.svg/138px-Ice_logo.svg.png?20191213230535" class="w-8"/> */}
                        <div class="mt-3 font-bold text-3xl">{type.typeofsubscription.toUpperCase()}</div>
                        <div class="text-sm font-light">{type.description}</div>
                        <div class="my-4">
                            <span class="font-bold text-base">For pricing please contact&nbsp;</span>
                            <span class="font-light text-sm"><FontAwesomeIcon icon={faMailReply}></FontAwesomeIcon></span>
                        </div>
                        <div>
                            <ul>
                            <li className="flex">
                           <FontAwesomeIcon className="m-1" icon={faCheck}></FontAwesomeIcon> <div class="font-semibold ">Add upto {type.no_of_suppliers} supplier users</div>
                            </li>
                            <li className="flex">
                           <FontAwesomeIcon className="m-1" icon={faCheck}></FontAwesomeIcon> <div class="font-semibold ">Add upto {type.no_of_security} security users</div>
                            </li>
                            <li className="flex">
                           <FontAwesomeIcon className="m-1" icon={faCheck}></FontAwesomeIcon> <div class="font-semibold ">Add upto {type.no_of_warehouse} Warehouse users</div>
                            </li>
                            <li className="flex">
                           <FontAwesomeIcon className="m-1" icon={faCheck}></FontAwesomeIcon> <div class="font-semibold ">{type.no_of_buildings} Building and {type.no_of_docks} docks</div>
                            </li>

                          
                    
                            </ul>
                        </div>

                        <Link to={"/request/subscription/"+type.typeofsubscription} class="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                            Contact for Details
                        </Link>
                    </div>
                </div>
                        )
                        
                    })
                }
               

            
            </div>
        </div>
    </div>
</body>
    );
}
 
export default SubscriptionAdminDashboard;

