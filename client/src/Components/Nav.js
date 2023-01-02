import React from 'react'
import { useEffect,useState } from 'react'

function Nav() {
    const [show,setShow]=useState(false)
    

    useEffect(()=>{
          window.addEventListener('scroll',()=>{
            if(window.scrollY >40){
                setShow(true)
            }else{
                setShow(false)
            }

          })
    },[])

  return (
    <div className={`nav ${show && 'navBlack'}`}>
    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"></img>
  
    </div>
  )
}

export default Nav