import React from 'react';

const ModalPesanan = ({ showCartModal, setShowCartModal, cartItems, handleCheckout }) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center ${showCartModal ? '' : 'hidden'}`}>
      <div className="bg-white p-6 rounded-md">
        <h2 className="text-lg font-semibold mb-4">Pesanan Anda</h2>
        {cartItems.length > 0 ? (
          <div>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>{item.strDrink}</li>
              ))}
            </ul>
            <button onClick={handleCheckout} className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Checkout</button>
          </div>
        ) : (
          <p>Keranjang belanja Anda kosong.</p>
        )}
        <button onClick={() => setShowCartModal(false)} className="absolute top-2 right-2 px-2 py-1 bg-red-500 text-white rounded-md">Close</button>
      </div>
    </div>
  );
};

export default ModalPesanan;
