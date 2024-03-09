import { useState } from 'react'
import './App.css'
import Themeprovider from './contexts/ThemeContext'
import { useEffect } from 'react'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() 
{
  const [themeMode,setThemeMode]=useState("light")

  const lightheme=()=>{
    setThemeMode("light")
  }
  const darktheme=()=>{
    setThemeMode("dark")
  }

  //actual change in theme
  useEffect(()=>
  {
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
 
  return  (
    <Themeprovider value ={{themeMode,lightheme,darktheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn/>
          </div>
        <div className="w-full max-w-sm mx-auto">
          <Card/>
        </div>
      </div>
   </div>
   </Themeprovider>
  )
}

export default App
