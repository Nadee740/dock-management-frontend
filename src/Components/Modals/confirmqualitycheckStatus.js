
import { Box, Modal } from "@mui/material";
import axios from "axios";
import { baseUrl } from "../../utils/baseurl";
 const ConfirWQualityCheckStatusModal = ({message,open,
    setOpen,onClose,data,
    setReadytoScan,setLoading,Token,
    set_message,set_open_confirm,set_open_failed_modal}) => {
    const submitQualityStatus=(isvalid)=>{
        setLoading(true)
        setReadytoScan(false)
        axios.post(`${baseUrl}/dock/check/load?isvalid=${isvalid}`,{ciphertext:data},{headers: {
            Authorization: `Bearer ${Token}`,
          }}).then((res)=>{
            console.log(res)
            set_message("Quality status updated succesfully")
            set_open_confirm(true)
        }).catch((err)=>{
            set_open_failed_modal(true)
            set_message(err.response.data.msg)

        }).finally(()=>{
            onClose()
            setLoading(false)
        })
    }
    return ( 
    <Modal
    onClose={onClose}
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
             onClick={()=>{
                submitQualityStatus(false)
             }}
            >
             Reject
            </button>
          </div>
          <div className="rounded-md mt-5 mb-5 text-white px-5 py-2  w-2/3 border-2 border-green-400 hover:bg-slate-200"
          >
            <button
            className="text-green-600 heading-class"
             type="button"
             onClick={()=>{
                submitQualityStatus(true)
             }}
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
