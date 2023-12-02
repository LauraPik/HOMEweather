

// import ApiCity from "./ApiCity";
 
 //let imgTagEl = document.querySelectorAll('img');

 

 
 
function getWeatherIcon(conditionCode, imgTagEl, description) { 
   
        if (conditionCode == "clear") { 
            let clearImg = imgTagEl.src = "css/icons/clear.png";
           
            description.innerText = 'Giedra'
            

        } else if(conditionCode == "cloudy-with-sunny-intervals"
        || conditionCode =="mist") {
            let SunnyIntImg = imgTagEl.src = "css/icons/mist.png";
            
            description.innerText ='Debesuota su pragiedruliais'
                
        }else if(conditionCode == "variable-cloudiness" ){
            let variableCloud = imgTagEl.src = "css/icons/mist.png";
            
            description.innerText ="Nepastoviai debesuota";
                


        }else if (conditionCode == "isolated-clouds" 
        ||conditionCode == "partly-cloudy") {    

            let cloudsImg = imgTagEl.src = "css/icons/clouds.png";
           
            description.innerText ='Mažai debesuota';
            

        } else if (conditionCode =="scattered-clouds"
        ||conditionCode == "overcast" 
        ||conditionCode =="cloudy") {

            let cloudsOneImg = imgTagEl.src = "css/icons/clouds.png";
            

            description.innerText = 'Debesuota'   
            
            

        } else if (conditionCode == "light-rain" || conditionCode == "moderate-rain" || conditionCode == "heavy-rain" || conditionCode == "rain"
        ||conditionCode == "freezing-rain") {

            let drizzleImg = imgTagEl.src = "css/icons/drizzle.png";
            
            description.innerText ="Numatomas lietus"     
            
            
        } else if (conditionCode == "rain-showers " || conditionCode == "light-rain-at-times " || conditionCode == "rain-at-times") {

            let drizzleImg = imgTagEl.src = "css/icons/rain.png";
            
             description.innerText ="Protarpiais nedidelis lietus"     
            
            
        }else if (conditionCode == "sleet" || conditionCode == "sleet-at-times" ||
        conditionCode =="sleet-showers" || conditionCode =="light-sleet ") { 

            let snowImg = imgTagEl.src = "css/icons/drizzle.png";
            
            description.innerText = "Šlapdriba"
            
            

        } else if (conditionCode == "thunder" || conditionCode =="isolated-thunderstorms" || conditionCode =="thunderstorms ") { 

            let snowImg = imgTagEl.src = "css/icons/isolated-thunderstorms.png";
          
            description.innerText = "Perkūnija"
            
            

        }else if (conditionCode == "fog") { 

            let fogImg = imgTagEl.src = "css/icons/drizzle.png";
            
            description.innerText ='Rūkas';  
          
              
        } else if ( conditionCode == "snow" ||conditionCode == "light-snow" || conditionCode == "snow-showers " || conditionCode == "snow-at-times" ||
        conditionCode == "light-snow-at-times"||
        conditionCode == "snowstorm") { 

            let snowImg = imgTagEl.src = "css/icons/snow.png";
            
            description.innerText ='Sniegas';
          

        }else if(conditionCode == "null"){
            let snowImg = imgTagEl.src = "css/icons/snow.png";

            description.innerText ='Oro sąlygos nenustatytos';  
        }
        else {     
            return "Duomenys dingo:❓";   
        } 
    
 }


export default getWeatherIcon;