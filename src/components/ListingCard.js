import React, {useState} from "react";

function ListingCard({ listing, onHandleDelete }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={() => setFavorite(!favorite)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={() => setFavorite(!favorite)}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={() => onHandleDelete(listing)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
