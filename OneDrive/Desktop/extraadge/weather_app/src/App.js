import {useState } from 'react';


let arr=["mumbai",
"delhi",
"bangalore",
"hyderabad",
"ahmedabad",
"chennai",
"kolkata",
"surat",
"pune"];



function App() {

  
   
   const [dat,setdat]=useState();
   let city=(e)=>
      {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e}&appid=3fbb2b31fd3e77c536be64abc677a4d1`).then((jsn)=>{
          return jsn.json()

        }).then((obj)=>{
            setdat(obj);
        })
      };
     
  return (
   
       <div className='container'>
          <div className='row'>
            <div className='col-11 border border-dark mt-5 d-flex justify-content-center' style={{height:"20vh"}}>
              <div>
                <h1>Select Your City</h1>
                <select onClick={(e)=>{city(e.target.value)}}  style={{marginLeft:"100px"}}>
                  {arr.map((item)=>{
                    return (<option>{item}</option>)
                  })}
                </select>
              </div>

              </div>
            </div>
            <div>
                
          </div>
          <div className='row'>
            <div className='col-11 border border-dark mt-5  ' style={{height:"50vh"}}>
               <div className='row d-flex justify-content-around mt-5'>
                  <div className='col-5 border border-dark ' style={{height:"40vh"}}>
                   <h1>Current Weather Data</h1>
                      <h6>Longitude:{dat.coord.lon}</h6>
                      <h6>Latitude:{dat.coord.lat}</h6>
                      <h6>Country:{dat.sys.country}</h6>
                      <h6>Temperature:{dat.main.temp_max+"F"}</h6>
                      <h6>TimeZone:{dat.timezone}</h6>
                      <h6>Visibility:{dat.visibility}</h6>

                  </div>

                  <div className='col-5 border border-dark ' style={{height:"40vh"}}>
                  <h1>5 Day Weather Forcasting</h1>
                      <h6>Weather:{dat.weather[0].description}</h6>
                      <h6>Min-Temperature:{dat.temp_min}</h6>
                      <h6>Max-Temperature:{dat.temp_max}</h6>
                      <h6>Wind-Speed:{dat.wind.speed}</h6>

                  </div>

               </div>
                
          </div>
       </div>

       </div>
  )
   
}
export default App;
