import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloudRain, faCloud, faSnowflake } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Footer = () => {
    const [location, setLocation] = useState({});
    const [weatherData, setWeatherData] = useState({});
    const API_KEY = 'e27ba77d95cbd3700c732db3f4017e3f';
  
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }, []);
  
    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${API_KEY}`);
                setWeatherData(response.data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };
  
        if (location.latitude && location.longitude) {
            fetchWeatherData();
        }
    }, [location]);

    const getWeatherIcon = (weatherCondition) => {
        switch (weatherCondition) {
            case 'Clear':
                return <FontAwesomeIcon icon={faSun} />;
            case 'Rain':
                return <FontAwesomeIcon icon={faCloudRain} />;
            case 'Clouds':
                return <FontAwesomeIcon icon={faCloud} />;
            case 'Snow':
                return <FontAwesomeIcon icon={faSnowflake} />;
            default:
                return null;
        }
    };

    return (
        <>
        <footer className='bg-sky-700 mt-10 mx-auto rounded-md h-[90px]'>
            <div className='mb-2'>
                {weatherData && weatherData.weather && (
                    <div className='text-center'>
                        <h1>Weather Forecast</h1>
                        <div className="flex items-center justify-center gap-2 mt-2">
                            {getWeatherIcon(weatherData.weather[0].main)}
                            <p>{weatherData.weather[0].description}</p>
                        </div>
                    </div>
                )}
            </div>
        </footer>
        </>
    );
}

export default Footer;
