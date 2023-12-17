import {Link} from "react-router-dom"
import dock_image from "../images/dock_new_12.jpg"
import ChangePasswordForm from "../Components/ChangePasswordForm"

function ChangePassword() {
    
  return (
    <div className="min-h-screen pb-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 flex items-center justify-between m-3 w-18/6" style={{minHeight:"80vh"}}>
        <div className="flex flex-col items-center justify-around">
          <h2 className="heading-class font-bold text-3xl ml-8 m-5 pb-5">Perfect Solution for Managing Your WareHouse</h2>
          <div className=' w-116 h-112 p-5 rounded-lg  mt-5 pt-5'>
            <img src={dock_image} className="w-full h-72 rounded-lg -rotate-62 -translate-y-2 " alt="" />
          </div>
        </div>
        <ChangePasswordForm/>

      </div>
    </div>
  )
}

export default ChangePassword