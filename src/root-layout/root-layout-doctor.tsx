import Navbar from '../components/navbar/navbar';
import { Navigate, Outlet } from 'react-router-dom';
import { useGetUserMe } from '../hooks/use-get-user-me';

const RootLayoutDoctor = () => {
    const { data: user } = useGetUserMe();
    if (user && user.role === "patient") {
        return <Navigate to="/" />;
    }
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default RootLayoutDoctor;
