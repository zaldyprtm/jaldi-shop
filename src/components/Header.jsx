import React, { useState } from 'react'; // Mengimpor useState
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop, faSignIn } from '@fortawesome/free-solid-svg-icons'; // Menambahkan faSignIn
import '../App.css';

const Header = () => {


    return (
        <div className='mx-auto'>
            <header className='w-full bg-sky-600'>
                <div className='md:px-4 font-semibold uppercase md:text-2xl text-md px-2'>Online Shop 
                    <FontAwesomeIcon icon={faShop} className='px-2 animate-pulse' /> 
                    
                        {/* <div>
                            <button className='absolute ml-[210px] cursor-pointer uppercase font-semibold lg:ml-[950px]' ><FontAwesomeIcon icon={faSignIn} /></button>
                        </div>
             */}
                </div>
            </header>
        </div>
    );
};

export default Header;
