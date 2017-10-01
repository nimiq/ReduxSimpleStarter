import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        // Converted to Celsius.
        const temps = cityData.list.map(weather => weather.main.temp).map(temp => temp-273.15);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const {lon, lat} = cityData.city.coord;

        return (
            <tr key={name}>
                <td><GoogleMap lat={lat} lon={lon} /></td>
                <td><Chart data={temps} color="orange" units="C" /></td>
                <td><Chart data={pressures} color="green" units="hPa" /></td>
                <td><Chart data={humidities} color="black" units="%" /></td>
            </tr>
        );
    }

    render () {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    // See data format in the comment at the borrom.
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);


/*
weather (in mapStateToProps()) is an array of objects like:

{
	"cod": "200",
	"message": 0.0046,
	"cnt": 40,
    "city": {
		"id": 5128581,
		"name": "New York",
		"coord": {
			"lat": 40.7143,
			"lon": -74.006
		},
		"country": "US"
	},
	"list": [
		{
			"dt": 1506870000,
            "dt_txt": "2017-10-01 15:00:00"
			"main": {
				"temp": 291.8,
				"temp_min": 288.94,
				"temp_max": 291.8,
				"pressure": 1039.82,
				"sea_level": 1043.24,
				"grnd_level": 1039.82,
				"humidity": 83,
				"temp_kf": 2.86
			},
			"weather": [
				{
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01d"
				}
			],
			"clouds": {
				"all": 0
			},
			"wind": {
				"speed": 1.9,
				"deg": 22.0023
			},
			"rain": {},
			"sys": {
				"pod": "d"
			},

		},
        ... and one object like this every 3 hours ...
	]
}
*/
