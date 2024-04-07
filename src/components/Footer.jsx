import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faBusinessTime, faCalendar, faCopyright,
         faLocation,
         faMap,
         faPhone, faShop, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSun, faCloudRain, faCloud, faSnowflake } from '@fortawesome/free-solid-svg-icons'; // Menambahkan ikon cuaca
import '../App.css';

const Footer = () => {
    // Fungsi untuk mengarahkan pengguna ke Google Maps
    const handleGoogleMapsClick = () => {
        const address = '1600 Amphitheatre Parkway, Mountain View, CA'; // Contoh alamat
        const googleMapsURL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
        window.open(googleMapsURL, '_blank');
    };

    // Fungsi untuk mengarahkan pengguna ke Instagram
    const handleIgClick = () => {
        const account = '_zackdirmusic';
        const igUrl = `https://www.instagram.com/${account}`;
        window.open(igUrl, '_blank');
    }



    return (
        <>
        <footer className='bg-sky-700 mt-10 mx-auto rounded-md h-[110px]'>
            <div className='mb-2'>
                <h1 className='text-center font-bold py-2 uppercase'>zal drinks</h1>
                <div className='flex justify-center items-center -mt-2'>
                    <FontAwesomeIcon icon={faCopyright} className='pr-2'/>
                    2024
                </div>
                <div className='mx-auto flex  items-center gap-2 justify-center mt-1 mb-2'>
                    <FontAwesomeIcon icon={faLocation} className='opacity-75 hover:opacity-100 hover:scale-125 transition-all ease-in-out duration-300' onClick={handleGoogleMapsClick}/>
                    <FontAwesomeIcon icon={faInstagram} className='opacity-75 hover:opacity-100 hover:scale-125 transition-all ease-in-out duration-300' onClick={handleIgClick}/>
                    
                    <div className='block text-center absolute'>
                    {/* <p className='text-xs mt-16'>Temperature: {weatherData.main.temp} °C</p> */}
                    {/* <p className='text-xs mt-16 text-center'>{weatherData.weather[0].main} {getWeatherIcon(weatherData.weather[0].main)}</p> */}
                    <p className='text-xs mt-12 text-center '>Pangkalpinang</p>
                    </div>
                </div>

            </div>
        </footer>
        </>
    );
}

export default Footer;
