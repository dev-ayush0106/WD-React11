import React, { useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import "./theme.css"

const UseState1 = () => {
    const[theme,setTheme]=useState(false)
    // theme(false) --> Light
    // theme(true) --> Dark
    console.log(theme)

    function updateTheme(){
        setTheme(!theme)
    }
  return (
    <div style={{width:"700px",border:"2px solid black",padding:"30px"}}
        className={(theme)?"themeChange":""}
    >
        {

            (theme)?
        <FaSun onClick={updateTheme} style={{fontSize:"5rem",color:"yellow"}}/>
            :
        <FaMoon onClick={updateTheme} style={{fontSize:"5rem",}}/>
        
        }
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptas dolor repudiandae fuga libero, porro doloremque, cupiditate laboriosam repellendus voluptatem aspernatur dignissimos natus? Enim nobis vel, officiis quis ratione quo accusantium molestias. Inventore enim architecto soluta assumenda voluptatem expedita fugit, nesciunt asperiores consequatur explicabo neque mollitia temporibus quos iusto omnis quae, recusandae eligendi aliquam optio earum excepturi esse dolore! Sapiente aliquam modi reprehenderit, repudiandae enim ab sed eveniet unde vitae doloribus fugit quod itaque esse! Tempore, voluptatem? Amet commodi consectetur ex laudantium cumque praesentium esse fuga perspiciatis enim accusantium, voluptatum corporis reprehenderit sunt magni ipsa, at veniam iste harum quae?
        </p>
    </div>
  )
}

export default UseState1
