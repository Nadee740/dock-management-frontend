import { useEffect } from 'react'
import Lottie from 'lottie-react';
import confirm_animation from '../animations/confirm_animation.json'
import { Modal } from '@mui/material';

export default function Confirm_Animtion({ isOpen,setisOpen}) {
    useEffect(() => {
        if (isOpen) {
          const timeoutId = setTimeout(() => {
           window.location="/"
           

          }, 2000); // Show the animation for 1 second before redirecting
    
          return () => clearTimeout(timeoutId); // Clear the timeout if the modal is closed before the animation ends
        }
      }, [isOpen]);
  return (
    <Modal className='flex w-1/3 items-center justify-center h-screen w-screen' open={isOpen}>
    <Lottie animationData={confirm_animation}/>
    </Modal>
  );
}