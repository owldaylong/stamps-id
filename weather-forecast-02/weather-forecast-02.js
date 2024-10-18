const axios = require('axios')

require('dotenv').config()

// Jakarta's latitude & longitude based on (https://www.latlong.net/place/jakarta-indonesia-27575.html)
let lat = -6.2
let lon = 106.816666
let API = process.env.OPENWEATHER_API
let URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API}`

// Call getWeather API
const getWeather = async () => {
	try {
		let weather = await axios.get(URL)
		const options = {
			weekday: 'short',
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		}

		for (let i = 1; i < weather.data.list.length; i++) {
			if (weather.data.list[i].dt_txt.endsWith('06:00:00')) {
				let date = new Date(weather.data.list[i].dt_txt.split(' ')[0])
				date = date.toLocaleDateString('id-ID', options)
				let temperature = weather.data.list[i].main.temp

				console.log(`${date}: ${temperature}°C`)
			}
		}
	} catch (error) {
		console.log(error)
	}
}

console.log('Weather Forecast:')
getWeather()
