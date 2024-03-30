import React, { useState, useRef } from 'react';
import './Brands.css';

const App = () => {
    const popularBrands = [
      { id: 1, name: 'Honda', image: 'https://example.com/honda.png', type: 'Bike' },
      { id: 2, name: 'Yamaha', image: 'https://example.com/yamaha.png', type: 'Bike' },
      { id: 3, name: 'Suzuki', image: 'https://example.com/suzuki.png', type: 'Bike' },
      { id: 4, name: 'Kawasaki', image: 'https://example.com/kawasaki.png', type: 'Bike' },
      { id: 5, name: 'Royal Enfield', image: 'https://example.com/royal-enfield.png', type: 'Bike' },
      { id: 6, name: 'TVS', image: 'https://example.com/tvs.png', type: 'Bike' },
      { id: 7, name: 'Bajaj', image: 'https://example.com/bajaj.png', type: 'Bike' },
      { id: 8, name: 'KTM', image: 'https://example.com/ktm.png', type: 'Electric' },
      { id: 9, name: 'Harley-Davidson', image: 'https://example.com/harley-davidson.png', type: 'Bike' },
    ];
  
    const [selectedType, setSelectedType] = useState('Bike');
    const [scrollPosition, setScrollPosition] = useState(0);
    const cardContainerRef = useRef(null);
  
    const handleTypeChange = (type) => {
      setSelectedType(type);
      setScrollPosition(0);
    };
  
    const handleScrollLeft = () => {
      cardContainerRef.current.scrollLeft -= 300;
      setScrollPosition(cardContainerRef.current.scrollLeft);
    };
  
    const handleScrollRight = () => {
      cardContainerRef.current.scrollLeft += 300;
      setScrollPosition(cardContainerRef.current.scrollLeft);
    };
  
    const filteredBrands = popularBrands.filter((brand) => brand.type === selectedType);
  
    return (
      <div className="container">
        <h2>Popular Brands</h2>
        <div className="button-container">
          <button
            className={selectedType === 'Bike' ? 'active' : ''}
            onClick={() => handleTypeChange('Bike')}
          >
            Bike
          </button>
          <button
            className={selectedType === 'Scooter' ? 'active' : ''}
            onClick={() => handleTypeChange('Scooter')}
          >
            Scooter
          </button>
          <button
            className={selectedType === 'Electric' ? 'active' : ''}
            onClick={() => handleTypeChange('Electric')}
          >
            Electric
          </button>
        </div>
        <div className="card-container-wrapper">
          <button className="scroll-button left" onClick={handleScrollLeft} disabled={scrollPosition === 0}>
            &lt;
          </button>
          <div className="card-container" ref={cardContainerRef}>
            {filteredBrands.map((brand) => (
              <div key={brand.id} className="card">
                <img src={brand.image} alt={brand.name} />
                <h3>{brand.name}</h3>
              </div>
            ))}
          </div>
          <button
            className="scroll-button right"
            onClick={handleScrollRight}
            disabled={
              cardContainerRef.current &&
              cardContainerRef.current.scrollLeft + cardContainerRef.current.offsetWidth ===
                cardContainerRef.current.scrollWidth
            }
          >
            &gt;
          </button>
        </div>
      </div>
    );
  };
  
  export default App;