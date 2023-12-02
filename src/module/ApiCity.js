import getWeatherIcon from "./addIcon";
// import addIcon from "./addIcon";



const ApiCity = () =>{
   
    // #####################################
    // Section list for cities #############
    //  defaults settings & params
    let sectionList = document.querySelectorAll('.weatherForCity');

    let cities = ['Kaunas', 'Vilnius', 'Alytus', 'Klaipeda'];
    //picking all p for temperature
    let pDegreeEl = document.querySelectorAll('.degree');

    for(let i = 0; i < cities.length; i++){
        
        fetch(`https://api.meteo.lt/v1/places/${cities[i]}/forecasts/long-term`)
            .then(response => response.json() )
            .then(data =>{ 
                console.log(data)
                // console.log("apiCityUTC: ", data.forecastTimestamps);
                let inforByHour = data.forecastTimestamps;
                let firstInfo = inforByHour[0];


                pDegreeEl[i].innerText = data.forecastTimestamps[i].airTemperature;

                // Set information abput city
                sectionList[i].getElementsByTagName("h6")[0].innerText = data.place.name;

                let timeData = (firstInfo.forecastTimeUtc).split(" ");
                sectionList[i].getElementsByClassName("time")[0].innerText = timeData[1].slice(0, 5);
               

               //set text for weather
               let description = sectionList[i].getElementsByClassName("description")[0];
              

                // set icon for weather all position
                let iconImg = sectionList[i].getElementsByTagName("img")[0];
                getWeatherIcon(firstInfo.conditionCode, iconImg, description);

            }
        )
    }
  
}


ApiCity()
export default ApiCity
