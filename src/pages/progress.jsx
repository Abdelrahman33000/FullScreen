import React, { useState } from 'react';
import './pro.css'; // Import CSS for styling

const PriceRangeSlider = () => {
  // Define state variables
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const [priceLabels, setPriceLabels] = useState([]); // State for price labels

  // Function to handle changes in minimum price
  const handleMinPriceChange = (event) => {
    setMinPrice(parseInt(event.target.value));
  };

  // Function to handle changes in maximum price
  const handleMaxPriceChange = (event) => {
    setMaxPrice(parseInt(event.target.value));
  };

  // Function to generate price labels every five steps
  const generatePriceLabels = () => {
    const labels = [];
    for (let i = 0; i <= 100; i += 5) {
      labels.push(i);
    }
    return labels;
  };

  // Generate price labels on initial render
  useState(() => {
    setPriceLabels(generatePriceLabels());
  }, []);

  return (
    <div className="price-range-slider" style={{margin:"100px"}}>
      <div className="price-slider">
        {/* Minimum price range input */}


        {/* Maximum price range input */}
        <label htmlFor="maxPrice">Max Price: {maxPrice}</label>
        <input
          type="range"
          id="maxPrice"
          min={0}
          max={500}
          value={maxPrice}
          onChange={handleMaxPriceChange}
        />
      </div>

      {/* Display price labels */}
      <div className="price-labels">
        {priceLabels.map((price) => (
          <span key={price} className="price-label">{price}</span>
        ))}
      </div>

      {/* Display selected price range */}
      <div className="selected-price-range">
        Selected Price Range: {minPrice} - {maxPrice}
      </div>
    </div>
  );
};

export default PriceRangeSlider;
