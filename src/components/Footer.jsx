import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faBusinessTime, faCalendar, faCopyright,
         faLocation,
         faMap,
         faPhone, faShop, faSignIn } from '@fortawesome/free-solid-svg-icons';
// import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Import ikon WhatsApp
import '../App.css';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    // Fungsi untuk mengarahkan pengguna ke Google Maps
    const handleGoogleMapsClick = () => {
        // Ganti "address" dengan alamat yang ingin Anda gunakan
        const address = '1600 Amphitheatre Parkway, Mountain View, CA'; // Contoh alamat
        // Buat URL dengan alamat
        const googleMapsURL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
        // Buka Google Maps dalam tab baru
        window.open(googleMapsURL, '_blank');
    };

    // Fungsi untuk mengarahkan pengguna ke WhatsApp
    const handleWhatsAppClick = () => {
        // Ganti "phoneNumber" dengan nomor telepon yang ingin Anda gunakan
        const phoneNumber = '6282269906771'; // Contoh nomor telepon
        // Buat URL dengan nomor telepon
        const whatsappURL = `https://wa.me/${phoneNumber}`;
        // Buka WhatsApp dalam tab baru
        window.open(whatsappURL, '_blank');
    };

    // function untuk mengarah ke Instagram
    const handleIgClick = () => {
        const account = '_zackdirmusic'
        const igUrl = `https://www.instagram.com/${account}`;
        window.open(igUrl, '_blank')
    }
    
    return (
        <footer className='bg-sky-700 mt-10 mx-auto rounded-md  h-[90px]'>
            <div className='mb-2'>
                <h1 className='text-center font-bold py-2 uppercase'>zal drinks</h1>
                <div className='flex justify-center items-center -mt-2'>
                    <FontAwesomeIcon icon={faCopyright} className='pr-2'/>
                    2024
                </div>
                <div className='mx-auto flex items-center gap-2 justify-center mt-1 mb-2'>
                    {/* icon alamat */}
                    <FontAwesomeIcon icon={faLocation} className='opacity-75 hover:opacity-100 hover:scale-125 transition-all ease-in-out duration-300' onClick={handleGoogleMapsClick}/>
                    {/* icon instagram */}
                    <FontAwesomeIcon icon={faInstagram} className='opacity-75 hover:opacity-100 hover:scale-125 transition-all ease-in-out duration-300' onClick={handleIgClick}/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;