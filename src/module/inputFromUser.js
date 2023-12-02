import  getWeatherIcon  from "./addIcon";

//Creating and picking my variables

let inputElm = document.querySelector('.form-control');

let sectionTwoElm = document.querySelector('#show');

let headingCity = document.querySelector('h3');

let sectionWeek = document.querySelectorAll('.weatherForWeek');


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


//Getting input from the user
inputElm.addEventListener('keyup', setQuery);
let optionElm = document.getElementsByTagName('option') 


function setQuery(event){
    if(inputElm.value.length > 5){
        for(let a=0; a<optionElm.length; a++){
            if(inputElm.value === optionElm[a].value){

                sectionTwoElm.classList.remove('d-none');
                //sending input to function for data retrieving
                getResults(inputElm.value);
                break;
            }
            else{
                sectionTwoElm.classList.add('d-none');
            }
        }
    }

}


//using input to display in html data
function getResults(query){

    let pDegreeElem = document.querySelectorAll('.degreeOne');

    let hDayOfTheWeek = document.querySelectorAll('.day')
    
    for(let y = 0; y < days.length; y++){
    fetch(`https://api.meteo.lt/v1/places/${query}/forecasts/long-term`)
    .then(response => response.json() )
    .then(dataOne =>{ 
       //let changeCity =  headingCity.innerText =;
        console.log(dataOne)
        headingCity.innerText = dataOne.place.code.toUpperCase();

         // extracting data for seven days
        const forecast = dataOne.forecastTimestamps;
        const uniqueDays = new Set();
        const temp = [];
        const weekDay = [];
        const conditionForDay= [];
        
        console.log(conditionForDay)
       
        forecast.forEach(day => {
            
            const date = new Date(day.forecastTimeUtc);

            //sets day of the week
            const dayOfweek = date.toLocaleDateString('lt-LT', {weekday:'long'});

            //filters days by date that duplicates
            if(uniqueDays.has(dayOfweek)){
                return;
            }

            //adding to list for filtering latter
            uniqueDays.add(dayOfweek);
            const temperature = day.airTemperature;
            temp.push(temperature)
            weekDay.push(dayOfweek);

            const conditionForWeek = day.conditionCode;
            conditionForDay.push(conditionForWeek);
        });
            
        //  ---------------------------------------

        // sending to html
        pDegreeElem[y].innerText = temp[y];
        hDayOfTheWeek[y].innerText = weekDay[y];
        
         // set icon for weather for all position
         let iconImgOne = sectionWeek[y].getElementsByTagName("img")[0];

         let test = getWeatherIcon(conditionForDay
        [y], iconImgOne, [,]); //skiping last paramater 
        console.log(conditionForDay)
        

            })
    }
}


setQuery()
export default setQuery;
