import React, { useState } from 'react'

export default function Header() {
    const [theme,setTheme] =useState(false)
    const [toggleBtn, setToggleBtn] = useState('<BsSun/> Light Mode')

    const toggleDarkMode = () => {
        if(theme){
            document.documentElement.classList.remove('lightEl')
            document.documentElement.classList.add('darkEl')
            setToggleBtn('Dark Mode')
            setTheme(current => current = !current)
        }
        if(!theme) {
            document.documentElement.classList.remove('darkEl')
            document.documentElement.classList.add('lightEl')

            setToggleBtn('Light Mode')
            setTheme(current => current = !current)
        }
    }
  return (
    <header>
        <p>Where in the world?</p>
        <button onClick={()=>toggleDarkMode()} dangerouslySetInnerHTML={{__html:toggleBtn}}></button>
    </header>
  )
}
