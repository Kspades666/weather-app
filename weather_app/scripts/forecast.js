class Forecast {
    constructor() {
        this.key = 'cy9A1GJXMPDEn1wazpQXwu5M2vf54duX'
        this.weatherURI =  'http://dataservice.accuweather.com/currentconditions/v1/'
        this.cityUri = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    }

    async updateCity(city) {
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key)
    
        return {cityDets, weather}
    }
    async getCity (city) {
        const query = `?apikey=${this.key}&q=${city}`
        const response = await fetch(this.cityUri + query)
        const data = await response.json()
        return data[0];
    }
    async getWeather (id) {
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query)
        const data = await response.json();

    return data[0]
    }
}


// getCity('manchester').then(data => {
//     // pass key from get city to get weather and get weather gives a proomise
//     return getWeather(data.Key)
//     // then pass data from get weather
// }).then(data =>{
//     console.log(data)
// }).catch (err => console.log(err))