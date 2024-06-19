// import React, { Component } from 'react';
// import axios from 'axios';

// class Weather extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             temp: 0,
//             temp_max: 0,
//             temp_min: 0,
//             humidity: 0,
//             desc: '',
//             icon: '',
//             loading: true,
//         };
//     }

//     componentDidMount() {
//         const cityName = 'Incheon';
//         const apiKey = process.env.REACT_APP_WEATHER_KEY;
//         const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

//         axios
//             .get(url)
//             .then((responseData) => {
//                 const data = responseData.data;
//                 this.setState({
//                     temp: data.main.temp,
//                     temp_max: data.main.temp_max,
//                     temp_min: data.main.temp_min,
//                     humidity: data.main.humidity,
//                     desc: data.weather[0].description,
//                     icon: data.weather[0].icon,
//                     loading: false,
//                 });
//             })
//             .catch((error) => {
//                 console.log(error);
//                 this.setState({ loading: false }); // 에러 발생 시 loading 상태를 false로 설정
//             });
//     }

//     render() {
//         const imgSrc = `https://openweathermap.com/img/w/${this.state.icon}.png`;
//         const { temp, temp_max, temp_min, humidity, desc, loading } = this.state;

//         if (loading) {
//             return <p>Loading...</p>;
//         } else {
//             return (
//                 <div>
//                     <div>
//                         <div>{(temp - 273.15).toFixed(0)}°C</div>
//                     </div>
//                     <div>
//                         <div>
//                             <img src={imgSrc} alt="" />{' '}
//                         </div>
//                         <div>{desc}</div>
//                     </div>

//                     <div style={{ height: '10px' }} />
                    
//                     <div>
//                         최고: {(temp_max - 273.15).toFixed(0)}°C 최저: {(temp_min - 273.15).toFixed(0)}°C
//                     </div>
//                     <div>
//                         <div style={{ fontSize: '17px', marginTop: '7px', marginRight: '8px' }}>{humidity}</div>
//                     </div>
//                 </div>
//             );
//         }
//     }
// }

// export default Weather;

import React, { useEffect, useState } from 'react';
import "../../scss/Weather.scss";

export default function Weather() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 60000); // Update date every minute

        return () => clearInterval(interval);
    }, []);

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
        <div className="Weather-container">
            <article className="widget">
                <div className="weatherIcon"></div>
                <div className="weatherData">
                    <h1 className="temperature">25˚</h1>
                    <h2 className="description">부분적으로 흐림</h2>
                    <h3 className="city">전라북도 남원시</h3>
                </div>
                <div className="date">
                    <h4 className="month">{monthNames[currentDate.getMonth()]}</h4>
                    <h5 className="day">{currentDate.getDate()}</h5>
                </div>
            </article>
        </div>
    );
}