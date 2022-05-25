const WeatherAppData ={
    getWheater(){
            try{
                let location;
                return fetch("https://ipgeolocation.abstractapi.com/v1/?api_key=3148a75cd3b6452c803d9761ef0a2441",{
                    method: 'GET',
                }).then(response =>{
                    return response.json();
        
                }).then(jsonResponse =>{
                    if(!jsonResponse.city){
                        return []
                    }
                       location = jsonResponse.city;
                       return fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${location}`,{
                            method: 'GET',
                            headers:{
                                "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
                                "x-rapidapi-key": "a8036e4d57msh8afc7e4a86124adp13ed5ejsne4fa76ff1c92"
                            }
                        }).then(response => {
                            return response.json();
                        }).then(jsonResponse => {
                            if(!jsonResponse.current){
                                return []
                            }
                            return jsonResponse
                        })
                })
            }
            catch{
                console.log('Error Has Been Found');
            }
    }
}

export default WeatherAppData;