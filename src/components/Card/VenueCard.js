import React from "react";


function VenueCard({ venue }) {
    const { name, image, city, capacity } = venue

    return (
        <div className="card">
            <div className="img-container">
                <img alt={name} src={image} />
            </div>
            <div className="content">
                <ul>
                    <div>
                        <h3><strong>Venue Name: {name}</strong></h3>
                    </div>
                    <div>
                        <h3><strong>Venue City: {city}</strong></h3>
                    </div>
                    <div>
                        <h4>Stadium Capacity: {capacity} </h4>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default VenueCard;