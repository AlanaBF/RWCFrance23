import React from "react";


function VenueCard({ venue }) {
    const { name, image, city, capacity, url } = venue

    return (
        <div className="card">
            <div className="img-container">
                <img alt={name} src={image} width="100%" />
            </div>
            <div className="content pt-3">
                <ul>
                    <div>
                        <h3><strong>Venue: {name}</strong></h3>
                    </div>
                    <div>
                        <h3>City:<strong> {city}</strong></h3>
                    </div>
                    <div>
                        <h4>Capacity: {capacity} </h4>
                    </div>
                    <a href={url}>Explore More</a>
                </ul>
            </div>
        </div>
    );
}

export default VenueCard;