import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './EachCountry.css';
import { BsArrowLeftShort } from "react-icons/bs";
import { useState } from "react";
import { useParams } from "react-router-dom";
// import Body from "./Body";


const EachCountry = () => {

  const[countries, setcountry]= useState([])
  const {name} = useParams()
//   const flags = props.flags
//   const region = props.region
//   const population = props.population
//   const capital = props.capital

  useEffect(()=>{
    try {
      
      fetch (`https://restcountries.com/v3.1/name/${name}`)
      .then(res=>{
        return res.json()
      })
      .then(data=>{
        setcountry(data)
        console.log(data)
      })
    } catch (error) {
      console.log(error)
    }
  },[name])

    return ( 
        <>
          <Link to ='/'>
          <div className="back">
            <BsArrowLeftShort className="icon"/>
            <div className="ba">back</div>
          </div>
          </Link>        

           <div className="count">           
            {countries.map((item)=>(
              <div >
                <div className="img3">
              <img src={item.flags.svg} alt="" className="img2" />   
                </div>
              <div className="details">
                <h2 className="idd">{name}</h2>  
                <div className="sub-details">
                  <div className="c"> Region: {item.region}</div>
                  <div className="p"> Population: {item.population.toLocaleString()}</div>
                  <div className="sub-region">Sub-Region: {item.subregion}</div>
                  <div className="ca"> Capital: {item.capital}</div>
                  </div>        
              </div>     
                    <div className="details2">
                      <div className="top">Top level Domain: {item.tld[0]}</div>
                      <div className="currency">Continent: {item.continents}</div>
                      <div className="language">Area: {item.area}</div>
                      </div> 
            </div>
))}
          </div>           
          </>
         
     )
}
 
export default EachCountry;