import axios from 'axios';




const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';



export const fetchData = async ( sw, ne) => {
// console.log(sw, ne, "eaa")
let obj = {
  bl_latitude: sw.lat,
  tr_latitude: ne.lat,
  bl_longitude: sw.lng,
  tr_longitude: ne.lng}
  // console.log(obj)
    try {
        const data = await axios.get(URL, {
          params: obj,
          headers: {
            'X-RapidAPI-Key': "35bc708560msh6eaa3092aea4bcfp143079jsn68cfbb6cbe37",
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        // console.log(data)
        return(data.data.data)
    } catch (error) {
        console.error(error);
    }
}
  
  