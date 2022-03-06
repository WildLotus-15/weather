fetch("https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=194b3a86f916060b97254cb333e71719")
.then(response => response.json())
.then(response => {
    console.log(response)

    const tempValue = response['main']['temp']
    console.log(tempValue)
})
.catch(err => {
	console.error(err);
});