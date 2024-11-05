import { useNavigate } from 'react-router-dom';
import { User } from '../types/store';

export const UseHandleNavigate = (user: User) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        if (user.role === "doctor") {
            return navigate("/doctor/profile-doctor");
        }
        navigate("/profile-patient");
    };
    const handleNavigate2 = () => {
        if (user.role === "doctor") {
            return navigate("/doctor/article");
        }
        navigate("/consulation");
    };
    return {
        handleNavigate,
        handleNavigate2
    }
}

