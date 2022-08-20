/* Selecting the id of the HTML elements. */
const trademark = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimum = document.querySelector('#minimo');
const maximum = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const results = document.querySelector('#resultado');


/* Getting the current year and subtracting 10 years from it. */
const max =  new Date().getFullYear();
const min =  max - 10;

/* An object that is used to store the values of the search. */
const SearchResults = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',    
    color: '',
    transmision: '',
}


/* Adding an event listener to the DOMContentLoaded event. When the DOMContentLoaded event is fired,
the ShowCars function is called. The ShowCars function is passed the autos array. */
document.addEventListener('DOMContentLoaded', () => {
    ShowCars(autos);



    FillSelect();
});


trademark.addEventListener('change', (e) =>{
    SearchResults.marca = e.target.value;

    FiltCars();

});

year.addEventListener('change', (e) =>{
    SearchResults.year = e.target.value;


    FiltCars();
});

minimum.addEventListener('change', (e) =>{
    SearchResults.minimo = Number(e.target.value);

    FiltCars();
});

maximum.addEventListener('change', (e) =>{
    SearchResults.maximo = Number(e.target.value);

    FiltCars();
});

puertas.addEventListener('change', (e) =>{
    SearchResults.puertas = e.target.value;

    FiltCars();

});

color.addEventListener('change', (e) =>{
    SearchResults.color = e.target.value;
    FiltCars();
    console.log(SearchResults);

});

transmision.addEventListener('change', (e) =>{
    SearchResults.transmision = e.target.value;
    FiltCars();
    
    
});


/**
 * It creates a new option element, sets its value to the current value of the loop variable, and sets
 * its text content to the same value. 
 * 
 * Then it appends the option to the select element.
 * @param autos - the array of cars
 */
function ShowCars(autos){   
    CleanHTML(); 
    autos.forEach(car => {
        const carsHTML = document.createElement('p');


        carsHTML.textContent = `
            ${car.marca}
            ${car.modelo}
            - ${car.year}
            - ${car.precio}
            - ${car.puertas}
            - Transmision: ${car.transmision}
            - ${car.color}

        `;

        results.appendChild(carsHTML);
    });
}

function CleanHTML () {

    const container  = document.querySelector('#resultado');
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function FillSelect() {
    
    for(let i = max; i >= min; i-- ){
        const option = document.createElement('option');

        option.value = i;
        option.textContent = i;

        year.appendChild(option);
    }
}


/**
 * It filters the cars based on the user's input.
 */
function FiltCars(){
    const res = autos.filter(FiltTradeMark).filter(FiltYear).filter(FiltMinimum).filter(FiltMaximum).filter(FiltPuertas).filter(FillColors).filter(FillTransmision);

    

    if (res.length){
        ShowCars(res);
    }
    else {
        NoShowCars();
    }
}

function NoShowCars() {
    CleanHTML();
    const NoShowCars = document.createElement('div');
    NoShowCars.classList.add('alerta', 'error');
    NoShowCars.textContent = 'Theres no results';

    results.appendChild(NoShowCars);
}

function FiltTradeMark(car){
    if(SearchResults.marca){
        return car.marca === SearchResults.marca;
    }

    return car;
}

function FiltYear(car) {
    if(SearchResults.year){
        return car.year === parseInt(SearchResults.year);
    }

    return car;
}

function FiltMinimum(car) {
    if(SearchResults.minimo){

        return car.precio >= SearchResults.minimo;

    }
    return car;
}


function FiltMaximum(car) {
  if(SearchResults.maximo){
        return car.precio <= SearchResults.maximo;    
    }
    return car;
}

function FiltPuertas(car) {
    if(SearchResults.puertas){
          return car.puertas === parseInt(SearchResults.puertas);    
      }
      return car;
  }

function FillTransmision(car){
    if(SearchResults.transmision){
        return car.transmision === SearchResults.transmision;
    }

    return car;

}

function FillColors(car){
    if(SearchResults.color){
        return car.color === SearchResults.color;
    }

    return car;

    const carded = 0;
}