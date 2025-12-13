import { createContext, useState } from "react";

export const ModeContext = createContext();



export function ThemeContext ({children}){

    const[mode , setMode] = useState(true)
// const toggleMode = ()=>{
//     setMode(!mode);
// }

    return(
        <>
         <ModeContext.Provider value={{mode , setMode}}>
            {children}
         </ModeContext.Provider>   
        </>

    )
}