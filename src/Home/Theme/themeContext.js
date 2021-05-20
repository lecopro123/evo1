import React, { useContext, useState } from "react";

const ThemeContext = React.createContext()

export function useTheme() {
    return useContext(ThemeContext)
}

export function ThemeProvider({ children }) {

    const [theme, settheme] = useState(false);

    function toggle() {
        settheme(!theme)
    }
    const value = {
        theme,
        toggle
    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )

}