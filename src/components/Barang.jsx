<<<<<<< HEAD
=======
import React, { useState, useEffect } from "react";

const Barang = () => {
    const Url = 'https://fakestoreapi.com/products'; // API
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [hoveredIndex, setHoveredIndex] = useState(null); // State untuk melacak indeks gambar yang dihover
    const [expandedDescriptionIndex, setExpandedDescriptionIndex] = useState(null); // State untuk melacak indeks deskripsi yang diperluas
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getDataProducts = async () => {
            try {
                const response = await fetch(Url);
                const dataProduct = await response.json();
                setProducts(dataProduct);
                setFilteredProducts(dataProduct);
            } catch (error) {
                console.log('kesalahan dalam fetching data', error);
                alert('Error fetching data', error);
            }
        };

        getDataProducts();
    }, []); // Menggunakan useEffect untuk memuat data produk saat komponen dipasang

    useEffect(() => {
        const results = products.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(results);
    }, [searchTerm, products]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const addToCart = (product) => {
        console.log('added');
    };

    const toggleDescription = (index) => {
        setExpandedDescriptionIndex(index === expandedDescriptionIndex ? null : index);
    };

    return (
        <div>
            <div className="mt-4 mx-auto px-4">
                <input placeholder="Cari Produk...." onChange={handleSearch} className="block outline-sky-600 bg-sky-100 placeholder:text-slate-500 rounded-md px-2 mb-4 active:text-black after:text-black before:text-black focus:text-black" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto">
                {filteredProducts.map((product, index) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden w-[270px] mx-auto">
                        <p className="text-sky-600 font-semibold py-2 px-2 text-xs">{product.category}</p>
                        <img 
                            src={product.image} 
                            alt={product.title} 
                            className={`w-full mt-2 h-32 object-contain outline-sky-500 ${hoveredIndex === index ? 'scale-110' : ''}`} 
                            onMouseEnter={() => setHoveredIndex(index)} 
                            onMouseLeave={() => setHoveredIndex(null)}
                        />
                        <div className="p-4">
                            <h2 className="text-lg text-black font-bold mb-2">{product.title}</h2>
                            <p className="text-gray-700 font-semibold">${product.price}</p>
                            {product.description.length > 100 ? (
                                <div>
                                    <p className={`text-xs font-bold text-black ${expandedDescriptionIndex === index ? '' : 'overflow-hidden whitespace-nowrap'}`}>
                                        {expandedDescriptionIndex === index ? product.description : `${product.description.slice(0, 100)}...`}
                                    </p>
                                    <button className="text-blue-500 text-xs font-bold" onClick={() => toggleDescription(index)}>
                                        {expandedDescriptionIndex === index ? 'Read less' : 'Read more'}
                                    </button>
                                </div>
                            ) : (
                                <p className="text-xs font-bold text-black">{product.description}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Barang;
>>>>>>> ff7124fa72b4bedd1afc2f2825b727c9670d676e
