import { Height } from "@mui/icons-material";
import { Box, Modal } from "@mui/material";
import Lottie from "lottie-react";
import confirm_animation from '../animations/confirm_animation.json'
 const ConfirmModal = ({message,open,setOpen,onClose}) => {
    return ( 
    <Modal
    className="mt-10"
    sx={{
        top: '50%',
          left: '50%',
          position: 'absolute',
    }}
       aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    open={open}
    >
          <Box
        sx={{
       
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: 8,
          p: 2,
        }}
      >
       <Lottie animationData={confirm_animation}/>
       <div className="flex items-center justify-center" >
       <h2 className="heading-class" id="modal-modal-title">Success!</h2>
       </div>
       <div className="flex items-center justify-center" >
       <p className="heading-class" id="modal-modal-title">{message}</p>
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
  
 export default ConfirmModal;
