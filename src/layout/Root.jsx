
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import useAuth from '../hooks/useAuth';
import { CircularProgress } from '@mui/material';

const Root = () => {
    const { loading } = useAuth();
    if (loading) {
        return <CircularProgress color="inherit" />
    }
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;