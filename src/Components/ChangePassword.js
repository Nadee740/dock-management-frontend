import React from 'react';
import { Modal, Button, Box, Typography } from '@mui/material';

const ChangePasswordModal = ({ open,onConfirm }) => {
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
        style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: 8,
          p: 4,
          textAlign: 'center',
        }}
      >
        <h2  className='heading-class text-2xl' variant="h5" id="modal-modal-title" gutterBottom>
          Change Password
        </h2>
        <p className="m-2 heading-class" id=" m-2 heading-class modal-modal-description">
          Please change your password to continue using our service.
        </p>
        {/* Add your password change form or input fields here */}
        {/* For simplicity, let's assume a button triggers password change */}
        <Button className='border-radius-2 heading-class' onClick={onConfirm} variant="contained" color="primary" sx={{ marginTop: 2 }}>
          Change Password
        </Button>
      </Box>
    </Modal>
  );
};

export default ChangePasswordModal;