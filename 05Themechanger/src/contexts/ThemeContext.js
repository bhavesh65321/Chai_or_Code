import { useContext } from "react";
import { createContext } from "react";


const ThemeContext=createContext({
    themeMode:"light",
    lightheme:()=>{},
    darktheme:() =>{},

})

export const themeprovider = ThemeContext.Provider  


export default function useTheme()
{
    return useContext(ThemeContext)
}