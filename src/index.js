import './style.css';
import {Time} from './objectTime';


function DOMController(){

    const body = document.querySelector('body');

    //Crear input box para introducir la region
    const inputRegionFor = document.createElement('label');
    const inputRegion = document.createElement('input');

    inputRegionFor.setAttribute('for','region')
    inputRegionFor.textContent = "Escriba la region";
    inputRegion.setAttribute('type','text');
    inputRegion.setAttribute('id','region');
    inputRegion.setAttribute('name','region');

    body.appendChild(inputRegionFor);
    body.appendChild(inputRegion);

    //crear una funcion que cree una lista con todos los elementos que hay que mostrar

    const dataTime = (country,region,localtime,condition,icon,humidity,is_day,temp_c,temp_f,last_updated) =>{
        const factores = [country,region,localtime,condition,icon,humidity,is_day,temp_c,temp_f,last_updated];
        const list = createElement('ul');
        for(let i=0;i<9;i++){
            const li = createElement('li');
            li.textContent = factores[i];
            list.appendChild(li);
        }
        body.appendChild(list);
    }

    return {dataTime}

}




function Main(){

    const domController = DOMController();
    let clima;

    const region = document.querySelector('#region').value;
    if (region === ""){
        alert("No ha escrito la region");
    }

    fetch(`https://api.weatherapi.com/v1/current.json?key=e3f538760ee4437ab18203438242906&q=${region}`,{mode:'cors'})
    .then(function(response) {
      return response.json();//espera a obtener del servidor todos los datos
    })
    .then(function(response) {
        //obtener cada valor para crear el objeto
        clima = new Time(response.location.country,response.location.region,response.location.localtime,response.current.condition.text,response.current.condition.icon,response.current.humidity,response.current.is_day,response.current.temp_c,response.current.temp_f,response.current.last_updated);
    });

    domController.dataTime()

}