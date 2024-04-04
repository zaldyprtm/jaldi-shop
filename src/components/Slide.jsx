import { faArrowLeft, faArrowRight, faCircle, faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react"

const Slide = () => {

    const images = [
        'https://source.unsplash.com/600x250?cocktails',
        'https://source.unsplash.com/600x300?drink',
        'https://source.unsplash.com/600x300?drinks',
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isSliding, setIsSliding] = useState(true)
 
    useEffect(() => {
        const interval = setInterval(() => {
            if (isSliding) {
                setCurrentImageIndex((prevIndex) => (prevIndex === images.length -1 ? 0 : prevIndex + 1))
            }
        }, 2000)

        return () => clearInterval(interval)
    }, [isSliding, images.length])
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
        setIsSliding(false);
      };
    
      const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        setIsSliding(false);
      };

    return (
        <>
    <div className="flex justify-center items-center mt-2">
      <div className="relative " onMouseEnter={() => setIsSliding(false)} onMouseLeave={() => setIsSliding(true)}>
        <img src={images[currentImageIndex]} alt="Gallery" className="w-[370px] object-contain rounded-lg" />
        <button className="absolute top-1/2 left-0 transform -translate-y-1/2 focus:outline-none" onClick={prevImage}>
          <FontAwesomeIcon className="h-6 w-10 text-gray-400" icon={faArrowLeft} />
        </button>
        <button className="absolute top-1/2 right-0 transform -translate-y-1/2 focus:outline-none" onClick={nextImage}>
          <FontAwesomeIcon className="h-6 w-10 text-gray-400" icon={faArrowRight}/>
        </button>
      </div>
    </div>
        
        
        </>
    )
}

export default Slide