import React, { useEffect } from 'react'
import {FaSearch} from 'react-icons/fa'
import NavBar from './NavBar'
import { useState } from 'react'
import CountryData from './CountryData'
// import { Link } from 'react-router-dom'



function Body() {
  // const handleClick = props.handleClick

  const [countries, setCountries]= useState([])
  const [SearchText, setSearchText]= useState([])


  // handleClick=()=>{
  //   setMystylee({
  //     backgroundColor:' white',
  //     color: 'black'
  //   })
  // }
  

  useEffect(()=>{
    try {     
      fetch('https://restcountries.com/v3.1/all')
      .then(res =>{
        return res.json();
      })
      .then((data)=>{
        console.log(data)
        setCountries(data)
      })
    } catch (error) {
      console.error(error)
    }

  },[])



  async function SearchCountry(){
    try{
      const res = await fetch (`https://restcountries.com/v3.1/name/${SearchText}`)
      const data = await res.json()
      setCountries(data)
    }

    catch(error){
      console.log(error)
    }
  }
  let handlesearch= (e)=>{
    e.preventDefault()
    SearchCountry()
    
}

  async function filterRegion(region){
    try {
        const res = await fetch(`https://restcountries.com/v3.1/region/${region}`)
         const data = await res.json();          
                setCountries(data)
                console.log(data)
            
        } catch (error) {
            console.log(error)            
        }
}
  
  const handleRegion=(e)=>{
    e.preventDefault();
    filterRegion();
}
const regions = [
  {
      name:"Europe",
  },
  {
      name:"Asia",
  },
  { 
      name:"Africa",
  },
  {
      name:"Oceania",
  },
  {
      name:"Americas",
  },
  {
      name:"Antarctic",
  }
]
  return (
    <html  >
    <body className ="bodyy">
      <NavBar />
        <form onSubmit={handlesearch} className='form' >
            <button><FaSearch/></button> 
            <input type="text" id='input' placeholder='Search for a country...'
            required value={SearchText}
            onChange={(e) => setSearchText(e.target.value)}/>  
        </form>
    
       <form action="" onSubmit={handleRegion}>
        <select name="" id="filter" className="reg"
         value={regions.name}
         onChange={e=>filterRegion(e.target.value)}
         >
          {regions.map((region, index)=>(

        <option key={index} value={region.name} className='opt'>
         {region.name}
      </option>
         ))}   
      </select>
        </form>
            <NavBar  />
           <CountryData countries={countries} />
       
    </body>
    </html>
  )
}

export default Body