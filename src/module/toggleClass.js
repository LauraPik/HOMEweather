let searchEl = document.querySelector('input');
let sectionOneElm = document.querySelector('#hide');
let sectionWeekOne = document.querySelector('#show');



const displayToggle = () =>{
    searchEl.addEventListener('input', () =>{
        if(searchEl.value ===''){
            sectionOneElm.style.display= 'inline'
            sectionWeekOne.style.display = 'd-none';
        }
        else if(searchEl.value.length == 0){

            sectionOneElm.style.display= 'inline'
            sectionWeekOne.style.display = 'd-none';
        }
        else{
            sectionOneElm.style.display= 'none'
        }
    })
}


displayToggle()
export default displayToggle

