import { Height } from "@mui/icons-material";
import { Box, Modal } from "@mui/material";
import Lottie from "lottie-react";
import failed_animation from '../animations/failed_animation.json'
 const Failed_Popup = ({message,open,setOpen,onClose}) => {
    return ( 
    <Modal
    className="mt-10"
    style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
       aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    open={open}
    >
          <Box
        sx={{
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: 8,
          p: 2,
        }}
      >
      <div className="flex justify-center items-center">
      <Lottie className="w-3/6" animationData={failed_animation}/>
      </div>
  
       <div className="flex items-center justify-center" >
       <h2 className="heading-class" id="modal-modal-title">Failed !</h2>
       </div>
       <div className="flex items-center justify-center" >
       <p className="heading-class text-[#C70039] text-center" id="modal-modal-title">{message}</p>
       </div>
       <div className="flex items-center justify-center">
       <div className="rounded-md mt-5 mb-5 text-white py-2  w-2/3 md:w-1/3 lg:w-1/3 bg-indigo-500"
          >
            <button
              className="w-full h-full "
             type="button"
             onClick={onClose}
            >
             Close
            </button>
          </div>

       </div>
   
 
       

      </Box>
    </Modal>
        );
 }
  
 export default Failed_Popup;
