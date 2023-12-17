
import { Box, Modal } from "@mui/material";
 const ConfirWQualityCheckStatusModal = ({message,open,setOpen,onClose}) => {
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
       <div className="flex items-center justify-center" >
       <h2 className="heading-class text-xl text-red-600" id="modal-modal-title">Update Quality</h2>
       </div>
       <div className="h-full w-full justify-center items-center">
        <div className="flex mt-12 " >
       <p className="heading-class text-lg" id="modal-modal-title">{message}</p>
       </div>
       <div className="items-center justify-center grid grid-cols-2 ">
       <div className="rounded-md mt-5 mb-5 text-white px-5 py-2 mx-auto w-2/3  border-2 border-red-400 hover:bg-slate-200"
          >
            <button
            className="text-red-600 heading-class"
             type="button"
             onClick={onClose}
            >
             Reject
            </button>
          </div>
          <div className="rounded-md mt-5 mb-5 text-white px-5 py-2  w-2/3 border-2 border-green-400 hover:bg-slate-200"
          >
            <button
            className="text-green-600 heading-class"
             type="button"
             onClick={onClose}
            >
             Accept
            </button>
          </div>

       </div>
       </div>
   
      </Box>
    </Modal>
        );
 }
  
 export default ConfirWQualityCheckStatusModal;
