const country = process.argv[2]
const request = require ("request")

const url = "https://api.weatherapi.com/v1/current.json?key=2ae2a7922af24c4aaff202032240811&q=London&aqi=no"

request ({url , json:true } , (error , response) => {
 console.log(response.body.temp)
 console.log(response.body.latitude)
 console.log(response.body.longtitude)

})
// ////////////////////////////////////////////////////////////////
const request = require ("request")
const geocode = (country , callback) =>{
    const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/uuiivcyco.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"
    request ({url : geocodeUrl , json :true} , (erorr , response) =>{
        if (erorr){
            callback("unable to connect geocode service" , undefined)
        } else if(response.body.message) {
            callback(response.body.message, undefined)
        }else if(response.body.features.lenght ==0){
            callback("unable to find location" , undefined)
        }else {
            callback(undefined , {
                longtitude : response.body.features[0].center[0],
                latitude : response.body.features[0].center[1]
            })
        }
    })
}

module.exports = geocode

geocode("egypt" , (erorr , data) =>{
    console.log("ERROR; " , erorr)
    console.log("DATA;" , data)
})

// //////////////////////////////////////

const request = require ("request")

    const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"
    request ({url : geocodeUrl , json :true} , (erorr , response) =>{
        if (erorr){
            console.log("unable to connect geocode service" )
        } else if(response.body.message) {
            console.log(response.body.message)
        }else if(response.body.features.lenght ==0){
            console.log("unable to find location")
        }else {
            const longtitude = response.body.features[0].center[0]
            const latitude = response.body.features[0].center[1]
            console.log(longtitude , latitude)
        }
            })
    


