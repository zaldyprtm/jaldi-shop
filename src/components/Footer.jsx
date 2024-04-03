import React, { useState } from 'react'; // Mengimpor useState
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faCalendar, faCopyright, faShop, faSignIn } from '@fortawesome/free-solid-svg-icons'; // Menambahkan faSignIn
import '../App.css';


const Footer = () => {

return (<>
    
        <footer className='bg-sky-700 mt-10 mx-auto w-[1210px] rounded-md'>
            <div className=''>
            <h1 className='text-center font-bold py-2'>Jaldi Shop</h1>
            <div className='flex justify-center items-center -mt-1'>
                <FontAwesomeIcon icon={faCopyright} className='pr-2'/> 2024
            </div>
            </div>
        </footer>
    


</>)


}

export default Footer