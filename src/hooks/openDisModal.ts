import React from "react";

export const useOpenDisModal = () => {
    const [openRegister, setOpenRegister] = React.useState(false);
    const handleOpenRegister = () => setOpenRegister(true);
    const handleCloseRegister = () => setOpenRegister(false);
    const [openLogin, setOpenLogin] = React.useState(false);
    const handleOpenLogin = () => setOpenLogin(true);
    const handleCloseLogin = () => setOpenLogin(false);
    return {
        openRegister,
        handleOpenRegister,
        handleCloseRegister,
        openLogin,
        handleOpenLogin,
        handleCloseLogin
    }
}


