import React, { useState, createContext } from 'react';

const AuthContext = createContext({
});

const AuthProvider = (props) => {

    const changeSignUpFormStatus = () => {
        
    }

    const changeLoginFormStatus = () => {
        
    }

    const changeForgotPasswordFormStatus = () => {
        
    }

    const changeForgotPasswordSubmitFormStatus = () => {
        
    }

    const setUserDetails = async (authenticatedUser) => {
    
    }

    return (
        <AuthContext.Provider value={{
            changeSignUpFormStatus,
            changeLoginFormStatus,
            changeForgotPasswordFormStatus,
            changeForgotPasswordSubmitFormStatus
        }
        } {...props} />
    );
}

export { AuthProvider, AuthContext }