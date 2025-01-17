import React, { useState } from "react";
import packages from "./packages";

const Packages = () => {
  const [maxPrice, setMaxPrice] = useState(500);

  const handleSliderChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const filteredPackages = packages.filter((pkg) => pkg.price <= maxPrice);

  return (
    <div className="container">
      <h2 className="text-center my-4">Available Packages</h2>
      
      {/* Slider */}
      <div className="mb-4">
        <label htmlFor="priceRange" className="form-label">
          Max Price: ${maxPrice}
        </label>
        <input
          type="range"
          className="form-range"
          id="priceRange"
          min="0"
          max="500"
          step="50"
          value={maxPrice}
          onChange={handleSliderChange}
        />
      </div>
      
      {/* Packages */}
      <div className="row">
        {filteredPackages.map((pkg) => (
          <div className="col-md-3 mb-4" key={pkg.id}>
            <div className="card h-100">
              <img src={pkg.image} className="card-img-top" alt={pkg.name} />
              <div className="card-body">
                <h5 className="card-title">{pkg.name}</h5>
                <p className="card-text">{pkg.description}</p>
                <p className="text-muted">Price: ${pkg.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
