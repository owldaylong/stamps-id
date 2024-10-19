const axios = require('axios')

require('dotenv').config()

/* JAKARTA'S LATITUDE & LONGITUDE BASED ON : (https://www.latlong.net/place/jakarta-indonesia-27575.html) */
let lat = -6.2
let lon = 106.816666
let API = process.env.OPENWEATHER_API
let URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API}`

/* CALL GETWEATHER API */
const getWeather = async () => {
	try {
		let weather = await axios.get(URL)
		const options = {
			weekday: 'short',
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		}

		/* USING FILTER METHOD & FOREACH METHOD*/
		const filteredData = weather.data.list.filter((perItem) =>
			perItem.dt_txt.endsWith('06:00:00')
		)

		if (!filteredData.length) {
			console.log('No data available at the moment. Please try again later.')
		} else {
			filteredData.forEach((perItem) => {
				const date = new Date(perItem.dt_txt.split(' ')[0]).toLocaleDateString(
					'id-ID',
					options
				)
				const temperature = perItem.main.temp

				console.log(`${date}: ${temperature}°C`)
			})
		}

		/* USING FOR LOOP */
		// for (let i = 1; i < weather.data.list.length; i++) {
		// 	if (weather.data.list[i].dt_txt.endsWith('06:00:00')) {
		// 		let date = new Date(
		// 			weather.data.list[i].dt_txt.split(' ')[0]
		// 		).toLocaleDateString('id-ID', options)
		// 		let temperature = weather.data.list[i].main.temp

		// 		console.log(`${date}: ${temperature}°C`)
		// 	}
		// }
	} catch (error) {
		console.log(`Error! ${error.message}.`)
	}
}

console.log('Weather Forecast:')
getWeather()
