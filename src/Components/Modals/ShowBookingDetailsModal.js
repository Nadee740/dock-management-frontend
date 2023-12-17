import React, { useState } from "react";
import { Button, Modal, Backdrop, Fade, Typography, Box } from "@mui/material";
import FontAwesome from "react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShowBookingDetailsModal = ({ open, setOpen, bookingdetails }) => {
  const handleOpen = () => {
    setOpen(true);
  };
  console.log(bookingdetails);

  const handleClose = () => {
    setOpen(false);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    borderRadius: 2,
    p: 2,
    display: "flex",
    flexDirection: "column",
  };

  return (
    open && (
      <Modal
        className=" booking-details-modal "
        open={open}
        onClose={handleClose}
      >
        <Fade in={open}>
        
        
          <Box className=" w-2/3 md:w-1/3" sx={style}>
            <h2 className=" m-2 heading-class text-xl">Booking Details</h2>
            <button
            onClick={handleClose}
        className="absolute top-0 right-0 m-4 text-xl text-gray-500"

      >   <FontAwesomeIcon icon={faClose}></FontAwesomeIcon></button>
            <div class="grid grid-cols-3 md:grid-cols-3">
              <div class="col-span-1 md:col-span-1">
                <p style={{ whiteSpace: 'nowrap' }} class="p-4 ">Booking ID</p>
              </div>
              <div class="col-span-2 md:col-span-2">
                <p  style={{ whiteSpace: 'nowrap' }}  class="p-4 ">{bookingdetails._id}</p>
              </div>
            </div>
            <div class="grid grid-cols-3 md:grid-cols-3 space-no">
              <div class="col-span-1 md:col-span-1">
                <p style={{ whiteSpace: 'nowrap' }}  class="p-4 ">Bill No</p>
              </div>
              <div class="col-span-2 md:col-span-2">
                <p style={{ whiteSpace: 'nowrap' }}  class="p-4 ">{bookingdetails.bill_no}</p>
              </div>
            </div>
            <div class="grid grid-cols-3 md:grid-cols-3">
              <div class="col-span-1 md:col-span-1">
                <p style={{ whiteSpace: 'nowrap' }}  class="p-4 ">Supplier Name</p>
              </div>
              <div class="col-span-2 md:col-span-2">
                <p style={{ whiteSpace: 'nowrap' }}  class="p-4 ">{bookingdetails.user_id.name}</p>
              </div>
            </div>
            <div class="grid grid-cols-3 md:grid-cols-3">
              <div class="col-span-1 md:col-span-1">
                <p style={{ whiteSpace: 'nowrap' }}  class="p-4 ">Company</p>
              </div>
              <div class="col-span-2 md:col-span-2">
                <p style={{ whiteSpace: 'nowrap' }}  class="p-4 ">{bookingdetails.delivery_company_id.company_name}</p>
              </div>
            </div>
  
            
          </Box>
        </Fade>
      </Modal>
    )
  );
};

export default ShowBookingDetailsModal;
