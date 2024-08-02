//Objeto donde van a estar todas las caracteristicas necesarias para el tiempo

class Time{
    constructor(country,region,localtime,condition,icon,humidity,is_day,temp_c,temp_f,last_updated){
        this.country = country;
        this.region = region;
        this.localtime = localtime;
        this.condition = condition;
        this.icon = icon;
        this.humidity = humidity;
        if(is_day){
            this.day = "dia";
        }
        else{
            this.day = "noche";
        }
        this.temp_c = temp_c;
        this.temp_f = temp_f;
        this.last_updated = last_updated;
    }

    //Getters

    getCountry(){return this.country};
    getRegion(){return this.region};
    getLocalTime(){return this.localtime};
    getCondition(){return this.condition};
    getIcon(){return this.icon};
    getHumidity(){return this.humidity};
    getDay(){return this.day};
    getTempC(){return this.temp_c};
    getTempF(){return this.temp_f};
    getLastUpdated(){return this.last_updated};
}

export {Time};