import { createContext, useState, useEffect } from "react";

export const AppContext = createContext({});

const initialAuthUserData = {};

export const AppContextProvider = ({ children }) => {
    // const [authUserData, setAuthUserData] = useState(() => {
    // 	const localData = localStorage.getItem("authUserData");
    // 	return localData ? JSON.parse(localData) : initialAuthUserData;
    // });
    const [accessToken, setAccessToken] = useState(() => {
        const localData = localStorage.getItem("accessToken");
        return localData ? localData : "";
    });

    // useEffect(() => {
    // 	localStorage.setItem("authUserData", JSON.stringify(authUserData));
    // }, [authUserData]);

    useEffect(() => {
        localStorage.setItem("accessToken", accessToken);
    }, [accessToken]);

    return (
        <AppContext.Provider
            value={{
                // authUserData,
                // setAuthUserData,
                accessToken,
                setAccessToken,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
