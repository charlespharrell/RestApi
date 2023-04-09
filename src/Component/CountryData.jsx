import { Link } from "react-router-dom";
// import EachCountry from "./EachCountry";


const CountryData = (props) => {

    const countries = props.countries
    return ( 

        <div className="data">        
  <>
      {!countries? (<h1 className='loading'>Loading...</h1>): (
 
         <div className="countries">  
            {countries.map((country)=>(
         <Link to= {`/${country.name.common}`}>
                <div className="country"  key={country.name.common}  >
                  <div className="flag">
                  <img src={country.flags.png} alt="" className="img" />
                     </div>
                  <div className="sensors">
                     <div className="name">{country.name.common}</div>
                     <div className="prc">
                     <div className="population">Population: {country.population.toLocaleString()}</div>
                     <div className="religion">Region: {country.region}</div>
                     <div className="capital">Capital: {country.capital}</div>
                     </div>
                  </div>
                </div>
         </Link>
             ))}
             </div>
         ) }
          </>
        </div>
     );
    //  <EachCountry flags="country.flags.png"
    //  region="country.region"
    //  population ="country.population" 
    //  capital ="country.capital"/>
}
 
export default CountryData;