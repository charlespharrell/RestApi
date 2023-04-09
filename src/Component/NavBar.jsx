import React from 'react'
import {BsMoon} from 'react-icons/bs'
import {BsSun} from 'react-icons/bs'
import { useState } from 'react'
// import Body from './Body'

function NavBar() {

  // const mystyle= props.mystyle
  // let setMystlee= props.setMystlee
//   const [dark, setDark] = useState('dark mode')
  const [mystyle, setMystle ]= useState({})
  const [world, setworld ]= useState({})
  const [dark, setdark]= useState({})
  const [bs, setBs]= useState(<BsMoon />)
  const [darkM, setdarkM]= useState('dark Mode')
  const [bss, setBss]= useState({})
  
  // const mystyle={
  //   backgroundColor: 'white',
  // }

  var valid = true;
  const handleClick = ()=>{

    if ( valid){
      
      setMystle({
          color: 'black',
          backgroundColor: 'white',
      })
      setworld({
          color: 'black',
          fontWeight:'bolder',
      })
      setdark({
          color: 'black',
          fontWeight:'bolder'
      })
      setBs(<BsSun />)
  
      setBss({
        color:'black'
      })
      setdarkM('light Mode')
      valid =false;
    }
    else{

      // setMystle({
      //   backgroundColor:'purple'
      // })

      //  setworld({
      //     color: 'white',
      //     fontWeight:'bolder',
      // })
      // setdark({
      //     color: 'white',
      //     fontWeight:'bolder'
      // })
      // setBs(<BsMoon />)
  
      // setBss({
      //   color:'white'
      // })

      // setdarkM('dark Mode')
      valid = true;
    }
    
  }
  
  return (
    <div className="body">
    
   <nav style={mystyle}>
    <div className='world' style={world} >Where in the world?</div>
    <div className="darkmode">
        <div className='moon' style={bss} >
        {bs}
        </div>
      <div className="dark" onClick={handleClick} style={dark}>{darkM}</div>
    </div>
   </nav>
   {/* <Body /> */}
    </div>
    
  )
}

export default NavBar