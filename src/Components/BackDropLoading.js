import { useContext } from 'react'
import Backdrop from '@mui/material/Backdrop';
import { UserContext } from '../Contexts/UserContexts';
import Loading from './Loading';


export default function BackdropLoading() {
  const {loading} = useContext(UserContext)
  return (
    <div>
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
        <Loading/>
      </Backdrop>
    </div>
  );
}