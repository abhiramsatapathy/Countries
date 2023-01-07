import React, {useState, useEffect, useRef }  from "react";
import "./center.css";




export default function Center() {
  const[country,setCountry] = useState([]);
  const dataFetchRef = useRef(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  function selectCountry(e) {
    const selected=country[e.target.value]
    setSelectedCountry(selected)
  }

  useEffect(() =>{
    if (dataFetchRef.current) return;
    dataFetchRef.current = true;
    const getcountry = async () => {
        const res = await fetch('https://restcountries.com/v3.1/all');
        const getcon = await res.json();
        setCountry(getcon);
    };
    getcountry();                                                                               
  }, []);                     
  return (
    <div className="imgg"> 
           <div>
         <select className="sele" onChange={selectCountry}>
             <option>SELECT A COUNTRY</option>
             {country.map((country,index) =>(
               <option key={index} value={index}> {country.name.common} </option>
             ))}

        </select>
        </div>

        {selectedCountry &&
        <table>
         <tr>
           <th>COUNTRY NAME</th>
           <th>CAPITAL NAME</th>
           <th>POPULATION</th>
           <th>FLAG</th>
         </tr>
         <tr>
           <td>{selectedCountry.name.common}</td>
           <td>{selectedCountry.capital}</td>
           <td>{selectedCountry.population}</td>
           <td>{selectedCountry.flag}</td>
         </tr>
         </table>
        }
        
    </div>
   
  );
}